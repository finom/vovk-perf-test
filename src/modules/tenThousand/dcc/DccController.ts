import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcc")
export default class DccController {
  @operation({
    summary: "Get Dcc",
  })
  @get()
  static getDcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcc",
  })
  @post("{id}")
  static createDcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
