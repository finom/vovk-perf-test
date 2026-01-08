import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfh")
export default class GfhController {
  @operation({
    summary: "Get Gfh",
  })
  @get()
  static getGfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfh",
  })
  @post("{id}")
  static createGfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
