import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fis")
export default class FisController {
  @operation({
    summary: "Get Fis",
  })
  @get()
  static getFis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fis",
  })
  @post("{id}")
  static createFis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
