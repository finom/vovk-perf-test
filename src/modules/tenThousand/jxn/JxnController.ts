import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxn")
export default class JxnController {
  @operation({
    summary: "Get Jxn",
  })
  @get()
  static getJxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxn",
  })
  @post("{id}")
  static createJxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
