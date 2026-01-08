import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gth")
export default class GthController {
  @operation({
    summary: "Get Gth",
  })
  @get()
  static getGth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gth",
  })
  @post("{id}")
  static createGth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
