import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ng")
export default class NgController {
  @operation({
    summary: "Get Ng",
  })
  @get()
  static getNg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ng",
  })
  @post("{id}")
  static createNg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
