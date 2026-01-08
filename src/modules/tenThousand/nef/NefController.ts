import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nef")
export default class NefController {
  @operation({
    summary: "Get Nef",
  })
  @get()
  static getNef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nef",
  })
  @post("{id}")
  static createNef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
