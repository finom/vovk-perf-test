import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqd")
export default class NqdController {
  @operation({
    summary: "Get Nqd",
  })
  @get()
  static getNqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqd",
  })
  @post("{id}")
  static createNqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
