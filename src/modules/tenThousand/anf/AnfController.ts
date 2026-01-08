import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anf")
export default class AnfController {
  @operation({
    summary: "Get Anf",
  })
  @get()
  static getAnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anf",
  })
  @post("{id}")
  static createAnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
