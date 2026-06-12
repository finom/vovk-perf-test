import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpv")
export default class DpvController {
  @operation({
    summary: "Get Dpv",
  })
  @get()
  static getDpv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpv",
  })
  @post("{id}")
  static createDpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
