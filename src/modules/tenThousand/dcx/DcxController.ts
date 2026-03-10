import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcx")
export default class DcxController {
  @operation({
    summary: "Get Dcx",
  })
  @get()
  static getDcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcx",
  })
  @post("{id}")
  static createDcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
