import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzq")
export default class BzqController {
  @operation({
    summary: "Get Bzq",
  })
  @get()
  static getBzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzq",
  })
  @post("{id}")
  static createBzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
