import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmc")
export default class GmcController {
  @operation({
    summary: "Get Gmc",
  })
  @get()
  static getGmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmc",
  })
  @post("{id}")
  static createGmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
