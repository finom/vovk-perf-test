import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzg")
export default class BzgController {
  @operation({
    summary: "Get Bzg",
  })
  @get()
  static getBzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzg",
  })
  @post("{id}")
  static createBzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
