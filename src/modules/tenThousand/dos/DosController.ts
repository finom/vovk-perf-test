import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dos")
export default class DosController {
  @operation({
    summary: "Get Dos",
  })
  @get()
  static getDos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dos",
  })
  @post("{id}")
  static createDos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
