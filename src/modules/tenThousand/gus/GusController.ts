import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gus")
export default class GusController {
  @operation({
    summary: "Get Gus",
  })
  @get()
  static getGus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gus",
  })
  @post("{id}")
  static createGus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
