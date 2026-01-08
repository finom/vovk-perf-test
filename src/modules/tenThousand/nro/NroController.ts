import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nro")
export default class NroController {
  @operation({
    summary: "Get Nro",
  })
  @get()
  static getNro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nro",
  })
  @post("{id}")
  static createNro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
