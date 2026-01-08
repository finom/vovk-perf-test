import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mij")
export default class MijController {
  @operation({
    summary: "Get Mij",
  })
  @get()
  static getMij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mij",
  })
  @post("{id}")
  static createMij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
