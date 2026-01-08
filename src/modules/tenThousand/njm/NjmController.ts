import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njm")
export default class NjmController {
  @operation({
    summary: "Get Njm",
  })
  @get()
  static getNjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njm",
  })
  @post("{id}")
  static createNjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
