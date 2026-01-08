import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzg")
export default class MzgController {
  @operation({
    summary: "Get Mzg",
  })
  @get()
  static getMzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzg",
  })
  @post("{id}")
  static createMzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
