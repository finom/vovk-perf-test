import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzr")
export default class BzrController {
  @operation({
    summary: "Get Bzr",
  })
  @get()
  static getBzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzr",
  })
  @post("{id}")
  static createBzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
