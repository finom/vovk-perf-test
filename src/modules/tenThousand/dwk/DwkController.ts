import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwk")
export default class DwkController {
  @operation({
    summary: "Get Dwk",
  })
  @get()
  static getDwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwk",
  })
  @post("{id}")
  static createDwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
