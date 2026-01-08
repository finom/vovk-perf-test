import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmt")
export default class NmtController {
  @operation({
    summary: "Get Nmt",
  })
  @get()
  static getNmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmt",
  })
  @post("{id}")
  static createNmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
