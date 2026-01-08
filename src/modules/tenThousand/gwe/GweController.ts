import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwe")
export default class GweController {
  @operation({
    summary: "Get Gwe",
  })
  @get()
  static getGwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwe",
  })
  @post("{id}")
  static createGwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
