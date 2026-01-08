import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ban")
export default class BanController {
  @operation({
    summary: "Get Ban",
  })
  @get()
  static getBan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ban",
  })
  @post("{id}")
  static createBan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
