import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdq")
export default class CdqController {
  @operation({
    summary: "Get Cdq",
  })
  @get()
  static getCdq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdq",
  })
  @post("{id}")
  static createCdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
