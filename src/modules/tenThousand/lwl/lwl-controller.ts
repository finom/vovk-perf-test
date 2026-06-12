import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwl")
export default class LwlController {
  @operation({
    summary: "Get Lwl",
  })
  @get()
  static getLwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwl",
  })
  @post("{id}")
  static createLwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
