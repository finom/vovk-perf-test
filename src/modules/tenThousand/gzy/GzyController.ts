import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzy")
export default class GzyController {
  @operation({
    summary: "Get Gzy",
  })
  @get()
  static getGzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzy",
  })
  @post("{id}")
  static createGzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
