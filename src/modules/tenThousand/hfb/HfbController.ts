import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfb")
export default class HfbController {
  @operation({
    summary: "Get Hfb",
  })
  @get()
  static getHfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfb",
  })
  @post("{id}")
  static createHfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
