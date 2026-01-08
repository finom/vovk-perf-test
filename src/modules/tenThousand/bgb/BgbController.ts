import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgb")
export default class BgbController {
  @operation({
    summary: "Get Bgb",
  })
  @get()
  static getBgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgb",
  })
  @post("{id}")
  static createBgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
