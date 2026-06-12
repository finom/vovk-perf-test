import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dst")
export default class DstController {
  @operation({
    summary: "Get Dst",
  })
  @get()
  static getDst = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dst",
  })
  @post("{id}")
  static createDst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
