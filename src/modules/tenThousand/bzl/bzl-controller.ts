import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzl")
export default class BzlController {
  @operation({
    summary: "Get Bzl",
  })
  @get()
  static getBzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzl",
  })
  @post("{id}")
  static createBzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
