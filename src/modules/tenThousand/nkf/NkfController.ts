import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkf")
export default class NkfController {
  @operation({
    summary: "Get Nkf",
  })
  @get()
  static getNkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkf",
  })
  @post("{id}")
  static createNkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
