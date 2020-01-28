import FeedPage from "../PageObjects/feed-page";
import { garrettUser, viewer } from "../Utilities/roles";

fixture`My first fixture`.page(`http://svvsd.cloud-staging.anark.com/feed`).beforeEach(async t => {
    t.ctx.user = garrettUser;

    await t
        .useRole(t.ctx.user.role);
});

const feedPage = new FeedPage();

test('can create conversation', async t => {
	

});
test('can add comment', async t => {
    const conversation = feedPage.getFirstConversation();
    await conversation.addComment('efgh');
});

test('can add reply', async t => {
    const conversation = feedPage.getFirstConversation();
    const commentText = 'abcd';
    const comment = await conversation.addComment(commentText);
    await comment.addReply('lmnop');
});
