import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwp")
export default class DwpController {
  @operation({
    summary: "Get Dwp",
  })
  @get()
  static getDwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwp",
  })
  @post("{id}")
  static createDwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
