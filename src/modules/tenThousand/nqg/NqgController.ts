import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqg")
export default class NqgController {
  @operation({
    summary: "Get Nqg",
  })
  @get()
  static getNqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqg",
  })
  @post("{id}")
  static createNqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
