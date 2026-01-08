import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcp")
export default class FcpController {
  @operation({
    summary: "Get Fcp",
  })
  @get()
  static getFcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcp",
  })
  @post("{id}")
  static createFcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
