import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuf")
export default class FufController {
  @operation({
    summary: "Get Fuf",
  })
  @get()
  static getFuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuf",
  })
  @post("{id}")
  static createFuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
