import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnl")
export default class BnlController {
  @operation({
    summary: "Get Bnl",
  })
  @get()
  static getBnl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnl",
  })
  @post("{id}")
  static createBnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
