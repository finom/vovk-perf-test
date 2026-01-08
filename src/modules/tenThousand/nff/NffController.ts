import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nff")
export default class NffController {
  @operation({
    summary: "Get Nff",
  })
  @get()
  static getNff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nff",
  })
  @post("{id}")
  static createNff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
