import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtl")
export default class GtlController {
  @operation({
    summary: "Get Gtl",
  })
  @get()
  static getGtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtl",
  })
  @post("{id}")
  static createGtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
