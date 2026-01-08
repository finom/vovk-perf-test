import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fas")
export default class FasController {
  @operation({
    summary: "Get Fas",
  })
  @get()
  static getFas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fas",
  })
  @post("{id}")
  static createFas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
