import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buv")
export default class BuvController {
  @operation({
    summary: "Get Buv",
  })
  @get()
  static getBuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buv",
  })
  @post("{id}")
  static createBuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
