import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mx")
export default class MxController {
  @operation({
    summary: "Get Mx",
  })
  @get()
  static getMx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mx",
  })
  @post("{id}")
  static createMx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
