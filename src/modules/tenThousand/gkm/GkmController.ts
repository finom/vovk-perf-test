import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkm")
export default class GkmController {
  @operation({
    summary: "Get Gkm",
  })
  @get()
  static getGkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkm",
  })
  @post("{id}")
  static createGkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
