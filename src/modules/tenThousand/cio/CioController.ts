import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cio")
export default class CioController {
  @operation({
    summary: "Get Cio",
  })
  @get()
  static getCio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cio",
  })
  @post("{id}")
  static createCio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
