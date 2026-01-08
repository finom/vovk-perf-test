import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ful")
export default class FulController {
  @operation({
    summary: "Get Ful",
  })
  @get()
  static getFul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ful",
  })
  @post("{id}")
  static createFul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
