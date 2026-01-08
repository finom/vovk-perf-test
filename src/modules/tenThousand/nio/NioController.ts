import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nio")
export default class NioController {
  @operation({
    summary: "Get Nio",
  })
  @get()
  static getNio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nio",
  })
  @post("{id}")
  static createNio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
