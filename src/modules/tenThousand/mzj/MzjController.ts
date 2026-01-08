import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzj")
export default class MzjController {
  @operation({
    summary: "Get Mzj",
  })
  @get()
  static getMzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzj",
  })
  @post("{id}")
  static createMzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
