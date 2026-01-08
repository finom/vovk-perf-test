import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nas")
export default class NasController {
  @operation({
    summary: "Get Nas",
  })
  @get()
  static getNas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nas",
  })
  @post("{id}")
  static createNas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
