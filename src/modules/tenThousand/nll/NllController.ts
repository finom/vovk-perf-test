import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nll")
export default class NllController {
  @operation({
    summary: "Get Nll",
  })
  @get()
  static getNll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nll",
  })
  @post("{id}")
  static createNll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
