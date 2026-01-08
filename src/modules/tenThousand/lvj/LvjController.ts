import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvj")
export default class LvjController {
  @operation({
    summary: "Get Lvj",
  })
  @get()
  static getLvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvj",
  })
  @post("{id}")
  static createLvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
