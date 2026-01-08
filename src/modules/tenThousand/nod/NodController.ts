import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nod")
export default class NodController {
  @operation({
    summary: "Get Nod",
  })
  @get()
  static getNod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nod",
  })
  @post("{id}")
  static createNod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
