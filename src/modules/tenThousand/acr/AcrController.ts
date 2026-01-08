import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acr")
export default class AcrController {
  @operation({
    summary: "Get Acr",
  })
  @get()
  static getAcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acr",
  })
  @post("{id}")
  static createAcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
