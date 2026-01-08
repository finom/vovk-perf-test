import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njp")
export default class NjpController {
  @operation({
    summary: "Get Njp",
  })
  @get()
  static getNjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njp",
  })
  @post("{id}")
  static createNjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
