import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlf")
export default class NlfController {
  @operation({
    summary: "Get Nlf",
  })
  @get()
  static getNlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlf",
  })
  @post("{id}")
  static createNlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
