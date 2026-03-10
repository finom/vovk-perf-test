import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwl")
export default class MwlController {
  @operation({
    summary: "Get Mwl",
  })
  @get()
  static getMwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwl",
  })
  @post("{id}")
  static createMwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
