import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkl")
export default class NklController {
  @operation({
    summary: "Get Nkl",
  })
  @get()
  static getNkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkl",
  })
  @post("{id}")
  static createNkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
