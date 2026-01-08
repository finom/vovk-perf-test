import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvb")
export default class LvbController {
  @operation({
    summary: "Get Lvb",
  })
  @get()
  static getLvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvb",
  })
  @post("{id}")
  static createLvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
