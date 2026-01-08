import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ags")
export default class AgsController {
  @operation({
    summary: "Get Ags",
  })
  @get()
  static getAgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ags",
  })
  @post("{id}")
  static createAgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
