import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fa")
export default class FaController {
  @operation({
    summary: "Get Fa",
  })
  @get()
  static getFa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fa",
  })
  @post("{id}")
  static createFa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
