import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eod")
export default class EodController {
  @operation({
    summary: "Get Eod",
  })
  @get()
  static getEod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eod",
  })
  @post("{id}")
  static createEod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
