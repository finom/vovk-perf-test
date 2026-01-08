import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nss")
export default class NssController {
  @operation({
    summary: "Get Nss",
  })
  @get()
  static getNss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nss",
  })
  @post("{id}")
  static createNss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
