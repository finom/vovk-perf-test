import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcl")
export default class LclController {
  @operation({
    summary: "Get Lcl",
  })
  @get()
  static getLcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcl",
  })
  @post("{id}")
  static createLcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
