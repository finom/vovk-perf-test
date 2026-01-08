import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amr")
export default class AmrController {
  @operation({
    summary: "Get Amr",
  })
  @get()
  static getAmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amr",
  })
  @post("{id}")
  static createAmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
