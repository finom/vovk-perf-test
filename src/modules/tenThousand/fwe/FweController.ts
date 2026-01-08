import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwe")
export default class FweController {
  @operation({
    summary: "Get Fwe",
  })
  @get()
  static getFwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwe",
  })
  @post("{id}")
  static createFwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
