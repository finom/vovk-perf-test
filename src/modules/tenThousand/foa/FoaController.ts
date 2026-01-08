import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foa")
export default class FoaController {
  @operation({
    summary: "Get Foa",
  })
  @get()
  static getFoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foa",
  })
  @post("{id}")
  static createFoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
