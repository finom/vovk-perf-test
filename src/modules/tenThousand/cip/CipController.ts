import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cip")
export default class CipController {
  @operation({
    summary: "Get Cip",
  })
  @get()
  static getCip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cip",
  })
  @post("{id}")
  static createCip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
