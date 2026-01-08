import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnj")
export default class BnjController {
  @operation({
    summary: "Get Bnj",
  })
  @get()
  static getBnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnj",
  })
  @post("{id}")
  static createBnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
