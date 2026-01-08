import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lj")
export default class LjController {
  @operation({
    summary: "Get Lj",
  })
  @get()
  static getLj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lj",
  })
  @post("{id}")
  static createLj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
