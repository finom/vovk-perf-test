import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csx")
export default class CsxController {
  @operation({
    summary: "Get Csx",
  })
  @get()
  static getCsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csx",
  })
  @post("{id}")
  static createCsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
