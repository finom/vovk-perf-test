import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgb")
export default class DgbController {
  @operation({
    summary: "Get Dgb",
  })
  @get()
  static getDgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgb",
  })
  @post("{id}")
  static createDgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
