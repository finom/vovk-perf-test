import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkj")
export default class NkjController {
  @operation({
    summary: "Get Nkj",
  })
  @get()
  static getNkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkj",
  })
  @post("{id}")
  static createNkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
