import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jid")
export default class JidController {
  @operation({
    summary: "Get Jid",
  })
  @get()
  static getJid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jid",
  })
  @post("{id}")
  static createJid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
