import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irc")
export default class IrcController {
  @operation({
    summary: "Get Irc",
  })
  @get()
  static getIrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irc",
  })
  @post("{id}")
  static createIrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
