import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bge")
export default class BgeController {
  @operation({
    summary: "Get Bge",
  })
  @get()
  static getBge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bge",
  })
  @post("{id}")
  static createBge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
