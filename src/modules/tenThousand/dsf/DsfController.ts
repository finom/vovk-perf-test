import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsf")
export default class DsfController {
  @operation({
    summary: "Get Dsf",
  })
  @get()
  static getDsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsf",
  })
  @post("{id}")
  static createDsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
