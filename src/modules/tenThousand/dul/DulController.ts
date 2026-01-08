import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dul")
export default class DulController {
  @operation({
    summary: "Get Dul",
  })
  @get()
  static getDul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dul",
  })
  @post("{id}")
  static createDul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
