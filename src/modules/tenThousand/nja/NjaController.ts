import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nja")
export default class NjaController {
  @operation({
    summary: "Get Nja",
  })
  @get()
  static getNja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nja",
  })
  @post("{id}")
  static createNja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
