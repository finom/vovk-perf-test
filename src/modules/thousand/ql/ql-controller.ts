import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ql")
export default class QlController {
  @operation({
    summary: "Get Ql",
  })
  @get()
  static getQl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ql",
  })
  @post("{id}")
  static createQl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
