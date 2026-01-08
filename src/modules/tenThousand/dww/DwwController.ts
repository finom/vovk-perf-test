import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dww")
export default class DwwController {
  @operation({
    summary: "Get Dww",
  })
  @get()
  static getDww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dww",
  })
  @post("{id}")
  static createDww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
