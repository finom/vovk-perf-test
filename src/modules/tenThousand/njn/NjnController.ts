import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njn")
export default class NjnController {
  @operation({
    summary: "Get Njn",
  })
  @get()
  static getNjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njn",
  })
  @post("{id}")
  static createNjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
