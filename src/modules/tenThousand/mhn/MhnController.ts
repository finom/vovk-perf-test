import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhn")
export default class MhnController {
  @operation({
    summary: "Get Mhn",
  })
  @get()
  static getMhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhn",
  })
  @post("{id}")
  static createMhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
