import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntc")
export default class NtcController {
  @operation({
    summary: "Get Ntc",
  })
  @get()
  static getNtc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ntc",
  })
  @post("{id}")
  static createNtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
