import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfz")
export default class GfzController {
  @operation({
    summary: "Get Gfz",
  })
  @get()
  static getGfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfz",
  })
  @post("{id}")
  static createGfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
