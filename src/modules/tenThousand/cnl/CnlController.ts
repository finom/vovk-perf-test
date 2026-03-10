import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnl")
export default class CnlController {
  @operation({
    summary: "Get Cnl",
  })
  @get()
  static getCnl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnl",
  })
  @post("{id}")
  static createCnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
