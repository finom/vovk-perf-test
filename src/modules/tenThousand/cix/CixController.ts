import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cix")
export default class CixController {
  @operation({
    summary: "Get Cix",
  })
  @get()
  static getCix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cix",
  })
  @post("{id}")
  static createCix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
