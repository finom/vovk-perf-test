import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxa")
export default class LxaController {
  @operation({
    summary: "Get Lxa",
  })
  @get()
  static getLxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxa",
  })
  @post("{id}")
  static createLxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
