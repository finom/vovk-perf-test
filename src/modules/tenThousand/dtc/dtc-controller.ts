import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtc")
export default class DtcController {
  @operation({
    summary: "Get Dtc",
  })
  @get()
  static getDtc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtc",
  })
  @post("{id}")
  static createDtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
