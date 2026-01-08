import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goe")
export default class GoeController {
  @operation({
    summary: "Get Goe",
  })
  @get()
  static getGoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goe",
  })
  @post("{id}")
  static createGoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
