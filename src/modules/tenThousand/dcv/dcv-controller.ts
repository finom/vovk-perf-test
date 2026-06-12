import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcv")
export default class DcvController {
  @operation({
    summary: "Get Dcv",
  })
  @get()
  static getDcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcv",
  })
  @post("{id}")
  static createDcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
