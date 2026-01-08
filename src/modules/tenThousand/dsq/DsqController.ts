import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsq")
export default class DsqController {
  @operation({
    summary: "Get Dsq",
  })
  @get()
  static getDsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsq",
  })
  @post("{id}")
  static createDsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
