import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxx")
export default class GxxController {
  @operation({
    summary: "Get Gxx",
  })
  @get()
  static getGxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxx",
  })
  @post("{id}")
  static createGxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
