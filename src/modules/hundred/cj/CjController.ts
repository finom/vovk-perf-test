import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cj")
export default class CjController {
  @operation({
    summary: "Get Cj",
  })
  @get()
  static getCj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cj",
  })
  @post("{id}")
  static createCj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
