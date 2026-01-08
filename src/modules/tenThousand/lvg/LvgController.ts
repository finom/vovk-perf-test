import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvg")
export default class LvgController {
  @operation({
    summary: "Get Lvg",
  })
  @get()
  static getLvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvg",
  })
  @post("{id}")
  static createLvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
