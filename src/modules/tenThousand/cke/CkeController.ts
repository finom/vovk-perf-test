import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cke")
export default class CkeController {
  @operation({
    summary: "Get Cke",
  })
  @get()
  static getCke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cke",
  })
  @post("{id}")
  static createCke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
