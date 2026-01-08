import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edl")
export default class EdlController {
  @operation({
    summary: "Get Edl",
  })
  @get()
  static getEdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edl",
  })
  @post("{id}")
  static createEdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
