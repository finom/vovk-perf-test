import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgh")
export default class CghController {
  @operation({
    summary: "Get Cgh",
  })
  @get()
  static getCgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgh",
  })
  @post("{id}")
  static createCgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
