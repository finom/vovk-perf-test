import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("biz")
export default class BizController {
  @operation({
    summary: "Get Biz",
  })
  @get()
  static getBiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Biz",
  })
  @post("{id}")
  static createBiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
