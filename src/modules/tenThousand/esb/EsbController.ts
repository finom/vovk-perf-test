import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esb")
export default class EsbController {
  @operation({
    summary: "Get Esb",
  })
  @get()
  static getEsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esb",
  })
  @post("{id}")
  static createEsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
