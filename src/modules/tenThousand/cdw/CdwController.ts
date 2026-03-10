import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdw")
export default class CdwController {
  @operation({
    summary: "Get Cdw",
  })
  @get()
  static getCdw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdw",
  })
  @post("{id}")
  static createCdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
