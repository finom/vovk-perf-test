import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcp")
export default class DcpController {
  @operation({
    summary: "Get Dcp",
  })
  @get()
  static getDcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcp",
  })
  @post("{id}")
  static createDcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
