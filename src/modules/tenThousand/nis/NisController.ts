import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nis")
export default class NisController {
  @operation({
    summary: "Get Nis",
  })
  @get()
  static getNis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nis",
  })
  @post("{id}")
  static createNis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
