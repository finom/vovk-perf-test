import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fca")
export default class FcaController {
  @operation({
    summary: "Get Fca",
  })
  @get()
  static getFca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fca",
  })
  @post("{id}")
  static createFca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
