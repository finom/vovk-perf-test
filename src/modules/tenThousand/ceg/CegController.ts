import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ceg")
export default class CegController {
  @operation({
    summary: "Get Ceg",
  })
  @get()
  static getCeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceg",
  })
  @post("{id}")
  static createCeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
