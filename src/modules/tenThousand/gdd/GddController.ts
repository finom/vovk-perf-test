import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdd")
export default class GddController {
  @operation({
    summary: "Get Gdd",
  })
  @get()
  static getGdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdd",
  })
  @post("{id}")
  static createGdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
