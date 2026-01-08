import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkp")
export default class GkpController {
  @operation({
    summary: "Get Gkp",
  })
  @get()
  static getGkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkp",
  })
  @post("{id}")
  static createGkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
