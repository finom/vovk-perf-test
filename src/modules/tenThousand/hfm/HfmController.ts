import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfm")
export default class HfmController {
  @operation({
    summary: "Get Hfm",
  })
  @get()
  static getHfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfm",
  })
  @post("{id}")
  static createHfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
