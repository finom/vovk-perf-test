import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwa")
export default class MwaController {
  @operation({
    summary: "Get Mwa",
  })
  @get()
  static getMwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwa",
  })
  @post("{id}")
  static createMwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
