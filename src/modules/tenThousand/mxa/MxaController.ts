import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxa")
export default class MxaController {
  @operation({
    summary: "Get Mxa",
  })
  @get()
  static getMxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxa",
  })
  @post("{id}")
  static createMxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
