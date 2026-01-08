import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cac")
export default class CacController {
  @operation({
    summary: "Get Cac",
  })
  @get()
  static getCac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cac",
  })
  @post("{id}")
  static createCac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
