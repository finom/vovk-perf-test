import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqa")
export default class NqaController {
  @operation({
    summary: "Get Nqa",
  })
  @get()
  static getNqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqa",
  })
  @post("{id}")
  static createNqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
