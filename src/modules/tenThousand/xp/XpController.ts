import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xp")
export default class XpController {
  @operation({
    summary: "Get Xp",
  })
  @get()
  static getXp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xp",
  })
  @post("{id}")
  static createXp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
