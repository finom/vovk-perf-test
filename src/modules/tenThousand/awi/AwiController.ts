import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awi")
export default class AwiController {
  @operation({
    summary: "Get Awi",
  })
  @get()
  static getAwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awi",
  })
  @post("{id}")
  static createAwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
