import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bji")
export default class BjiController {
  @operation({
    summary: "Get Bji",
  })
  @get()
  static getBji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bji",
  })
  @post("{id}")
  static createBji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
