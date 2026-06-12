import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cso")
export default class CsoController {
  @operation({
    summary: "Get Cso",
  })
  @get()
  static getCso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cso",
  })
  @post("{id}")
  static createCso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
