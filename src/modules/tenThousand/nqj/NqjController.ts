import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqj")
export default class NqjController {
  @operation({
    summary: "Get Nqj",
  })
  @get()
  static getNqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqj",
  })
  @post("{id}")
  static createNqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
