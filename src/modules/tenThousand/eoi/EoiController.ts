import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoi")
export default class EoiController {
  @operation({
    summary: "Get Eoi",
  })
  @get()
  static getEoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoi",
  })
  @post("{id}")
  static createEoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
