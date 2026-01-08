import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwx")
export default class DwxController {
  @operation({
    summary: "Get Dwx",
  })
  @get()
  static getDwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwx",
  })
  @post("{id}")
  static createDwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
