import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnc")
export default class GncController {
  @operation({
    summary: "Get Gnc",
  })
  @get()
  static getGnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnc",
  })
  @post("{id}")
  static createGnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
