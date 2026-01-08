import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mme")
export default class MmeController {
  @operation({
    summary: "Get Mme",
  })
  @get()
  static getMme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mme",
  })
  @post("{id}")
  static createMme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
