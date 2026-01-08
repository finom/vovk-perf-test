import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsp")
export default class GspController {
  @operation({
    summary: "Get Gsp",
  })
  @get()
  static getGsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsp",
  })
  @post("{id}")
  static createGsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
