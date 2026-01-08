import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgj")
export default class DgjController {
  @operation({
    summary: "Get Dgj",
  })
  @get()
  static getDgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgj",
  })
  @post("{id}")
  static createDgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
