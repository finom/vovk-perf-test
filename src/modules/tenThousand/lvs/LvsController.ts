import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvs")
export default class LvsController {
  @operation({
    summary: "Get Lvs",
  })
  @get()
  static getLvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvs",
  })
  @post("{id}")
  static createLvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
