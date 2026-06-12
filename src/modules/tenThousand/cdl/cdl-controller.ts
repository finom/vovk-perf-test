import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdl")
export default class CdlController {
  @operation({
    summary: "Get Cdl",
  })
  @get()
  static getCdl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdl",
  })
  @post("{id}")
  static createCdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
