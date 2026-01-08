import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axo")
export default class AxoController {
  @operation({
    summary: "Get Axo",
  })
  @get()
  static getAxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axo",
  })
  @post("{id}")
  static createAxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
