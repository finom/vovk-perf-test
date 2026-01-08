import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvx")
export default class LvxController {
  @operation({
    summary: "Get Lvx",
  })
  @get()
  static getLvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvx",
  })
  @post("{id}")
  static createLvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
