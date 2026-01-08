import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggu")
export default class GguController {
  @operation({
    summary: "Get Ggu",
  })
  @get()
  static getGgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggu",
  })
  @post("{id}")
  static createGgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
