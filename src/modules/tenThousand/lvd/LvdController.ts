import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvd")
export default class LvdController {
  @operation({
    summary: "Get Lvd",
  })
  @get()
  static getLvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvd",
  })
  @post("{id}")
  static createLvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
