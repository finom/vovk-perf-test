import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtl")
export default class DtlController {
  @operation({
    summary: "Get Dtl",
  })
  @get()
  static getDtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtl",
  })
  @post("{id}")
  static createDtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
