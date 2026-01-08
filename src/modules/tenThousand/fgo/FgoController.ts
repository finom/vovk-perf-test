import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgo")
export default class FgoController {
  @operation({
    summary: "Get Fgo",
  })
  @get()
  static getFgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgo",
  })
  @post("{id}")
  static createFgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
