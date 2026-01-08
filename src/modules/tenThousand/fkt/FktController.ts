import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkt")
export default class FktController {
  @operation({
    summary: "Get Fkt",
  })
  @get()
  static getFkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkt",
  })
  @post("{id}")
  static createFkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
