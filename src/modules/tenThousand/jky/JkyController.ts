import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jky")
export default class JkyController {
  @operation({
    summary: "Get Jky",
  })
  @get()
  static getJky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jky",
  })
  @post("{id}")
  static createJky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
