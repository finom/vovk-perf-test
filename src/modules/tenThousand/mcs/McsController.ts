import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcs")
export default class McsController {
  @operation({
    summary: "Get Mcs",
  })
  @get()
  static getMcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcs",
  })
  @post("{id}")
  static createMcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
