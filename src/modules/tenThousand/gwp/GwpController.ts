import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwp")
export default class GwpController {
  @operation({
    summary: "Get Gwp",
  })
  @get()
  static getGwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwp",
  })
  @post("{id}")
  static createGwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
