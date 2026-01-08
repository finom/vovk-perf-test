import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbb")
export default class NbbController {
  @operation({
    summary: "Get Nbb",
  })
  @get()
  static getNbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbb",
  })
  @post("{id}")
  static createNbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
