import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfg")
export default class HfgController {
  @operation({
    summary: "Get Hfg",
  })
  @get()
  static getHfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfg",
  })
  @post("{id}")
  static createHfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
