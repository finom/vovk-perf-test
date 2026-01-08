import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nq")
export default class NqController {
  @operation({
    summary: "Get Nq",
  })
  @get()
  static getNq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nq",
  })
  @post("{id}")
  static createNq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
