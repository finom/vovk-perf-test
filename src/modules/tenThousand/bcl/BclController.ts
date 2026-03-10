import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcl")
export default class BclController {
  @operation({
    summary: "Get Bcl",
  })
  @get()
  static getBcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcl",
  })
  @post("{id}")
  static createBcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
