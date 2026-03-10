import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqm")
export default class BqmController {
  @operation({
    summary: "Get Bqm",
  })
  @get()
  static getBqm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqm",
  })
  @post("{id}")
  static createBqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
