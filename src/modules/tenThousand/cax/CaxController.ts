import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cax")
export default class CaxController {
  @operation({
    summary: "Get Cax",
  })
  @get()
  static getCax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cax",
  })
  @post("{id}")
  static createCax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
