import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwt")
export default class DwtController {
  @operation({
    summary: "Get Dwt",
  })
  @get()
  static getDwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwt",
  })
  @post("{id}")
  static createDwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
