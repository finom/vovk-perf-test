import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhr")
export default class DhrController {
  @operation({
    summary: "Get Dhr",
  })
  @get()
  static getDhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhr",
  })
  @post("{id}")
  static createDhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
