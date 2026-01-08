import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bna")
export default class BnaController {
  @operation({
    summary: "Get Bna",
  })
  @get()
  static getBna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bna",
  })
  @post("{id}")
  static createBna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
