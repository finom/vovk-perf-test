import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlj")
export default class NljController {
  @operation({
    summary: "Get Nlj",
  })
  @get()
  static getNlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlj",
  })
  @post("{id}")
  static createNlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
