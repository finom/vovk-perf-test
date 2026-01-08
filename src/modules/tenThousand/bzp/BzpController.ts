import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzp")
export default class BzpController {
  @operation({
    summary: "Get Bzp",
  })
  @get()
  static getBzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzp",
  })
  @post("{id}")
  static createBzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
