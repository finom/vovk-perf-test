import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cds")
export default class CdsController {
  @operation({
    summary: "Get Cds",
  })
  @get()
  static getCds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cds",
  })
  @post("{id}")
  static createCds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
