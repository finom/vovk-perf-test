import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alm")
export default class AlmController {
  @operation({
    summary: "Get Alm",
  })
  @get()
  static getAlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alm",
  })
  @post("{id}")
  static createAlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
