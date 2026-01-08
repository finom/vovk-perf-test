import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gex")
export default class GexController {
  @operation({
    summary: "Get Gex",
  })
  @get()
  static getGex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gex",
  })
  @post("{id}")
  static createGex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
