import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzk")
export default class HzkController {
  @operation({
    summary: "Get Hzk",
  })
  @get()
  static getHzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzk",
  })
  @post("{id}")
  static createHzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
