import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvp")
export default class LvpController {
  @operation({
    summary: "Get Lvp",
  })
  @get()
  static getLvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvp",
  })
  @post("{id}")
  static createLvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
