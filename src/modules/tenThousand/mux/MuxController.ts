import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mux")
export default class MuxController {
  @operation({
    summary: "Get Mux",
  })
  @get()
  static getMux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mux",
  })
  @post("{id}")
  static createMux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
