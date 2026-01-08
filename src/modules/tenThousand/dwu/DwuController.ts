import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwu")
export default class DwuController {
  @operation({
    summary: "Get Dwu",
  })
  @get()
  static getDwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwu",
  })
  @post("{id}")
  static createDwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
