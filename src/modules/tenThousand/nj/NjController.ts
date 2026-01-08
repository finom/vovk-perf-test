import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nj")
export default class NjController {
  @operation({
    summary: "Get Nj",
  })
  @get()
  static getNj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nj",
  })
  @post("{id}")
  static createNj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
