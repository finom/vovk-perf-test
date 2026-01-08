import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dee")
export default class DeeController {
  @operation({
    summary: "Get Dee",
  })
  @get()
  static getDee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dee",
  })
  @post("{id}")
  static createDee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
