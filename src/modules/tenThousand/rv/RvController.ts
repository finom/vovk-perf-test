import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rv")
export default class RvController {
  @operation({
    summary: "Get Rv",
  })
  @get()
  static getRv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rv",
  })
  @post("{id}")
  static createRv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
