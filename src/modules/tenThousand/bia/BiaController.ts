import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bia")
export default class BiaController {
  @operation({
    summary: "Get Bia",
  })
  @get()
  static getBia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bia",
  })
  @post("{id}")
  static createBia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
