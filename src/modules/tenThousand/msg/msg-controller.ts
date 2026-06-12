import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msg")
export default class MsgController {
  @operation({
    summary: "Get Msg",
  })
  @get()
  static getMsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msg",
  })
  @post("{id}")
  static createMsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
