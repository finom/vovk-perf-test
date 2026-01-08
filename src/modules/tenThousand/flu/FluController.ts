import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flu")
export default class FluController {
  @operation({
    summary: "Get Flu",
  })
  @get()
  static getFlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flu",
  })
  @post("{id}")
  static createFlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
