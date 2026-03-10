import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcq")
export default class DcqController {
  @operation({
    summary: "Get Dcq",
  })
  @get()
  static getDcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcq",
  })
  @post("{id}")
  static createDcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
