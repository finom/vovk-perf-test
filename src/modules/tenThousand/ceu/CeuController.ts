import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ceu")
export default class CeuController {
  @operation({
    summary: "Get Ceu",
  })
  @get()
  static getCeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceu",
  })
  @post("{id}")
  static createCeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
