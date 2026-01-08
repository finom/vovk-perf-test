import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fae")
export default class FaeController {
  @operation({
    summary: "Get Fae",
  })
  @get()
  static getFae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fae",
  })
  @post("{id}")
  static createFae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
