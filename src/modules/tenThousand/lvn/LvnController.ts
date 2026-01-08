import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvn")
export default class LvnController {
  @operation({
    summary: "Get Lvn",
  })
  @get()
  static getLvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvn",
  })
  @post("{id}")
  static createLvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
