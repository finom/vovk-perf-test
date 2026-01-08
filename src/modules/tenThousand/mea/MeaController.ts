import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mea")
export default class MeaController {
  @operation({
    summary: "Get Mea",
  })
  @get()
  static getMea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mea",
  })
  @post("{id}")
  static createMea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
