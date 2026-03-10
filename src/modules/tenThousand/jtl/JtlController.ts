import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtl")
export default class JtlController {
  @operation({
    summary: "Get Jtl",
  })
  @get()
  static getJtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtl",
  })
  @post("{id}")
  static createJtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
