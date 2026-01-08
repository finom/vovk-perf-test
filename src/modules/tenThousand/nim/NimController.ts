import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nim")
export default class NimController {
  @operation({
    summary: "Get Nim",
  })
  @get()
  static getNim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nim",
  })
  @post("{id}")
  static createNim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
