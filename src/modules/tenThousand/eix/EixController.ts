import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eix")
export default class EixController {
  @operation({
    summary: "Get Eix",
  })
  @get()
  static getEix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eix",
  })
  @post("{id}")
  static createEix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
