import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuo")
export default class FuoController {
  @operation({
    summary: "Get Fuo",
  })
  @get()
  static getFuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuo",
  })
  @post("{id}")
  static createFuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
