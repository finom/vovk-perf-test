import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njs")
export default class NjsController {
  @operation({
    summary: "Get Njs",
  })
  @get()
  static getNjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njs",
  })
  @post("{id}")
  static createNjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
