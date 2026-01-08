import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngu")
export default class NguController {
  @operation({
    summary: "Get Ngu",
  })
  @get()
  static getNgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngu",
  })
  @post("{id}")
  static createNgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
