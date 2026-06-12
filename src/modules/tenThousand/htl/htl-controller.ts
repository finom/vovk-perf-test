import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htl")
export default class HtlController {
  @operation({
    summary: "Get Htl",
  })
  @get()
  static getHtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htl",
  })
  @post("{id}")
  static createHtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
