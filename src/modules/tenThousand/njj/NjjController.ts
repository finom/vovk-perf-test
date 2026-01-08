import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njj")
export default class NjjController {
  @operation({
    summary: "Get Njj",
  })
  @get()
  static getNjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njj",
  })
  @post("{id}")
  static createNjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
