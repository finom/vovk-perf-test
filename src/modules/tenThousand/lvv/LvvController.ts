import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvv")
export default class LvvController {
  @operation({
    summary: "Get Lvv",
  })
  @get()
  static getLvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvv",
  })
  @post("{id}")
  static createLvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
