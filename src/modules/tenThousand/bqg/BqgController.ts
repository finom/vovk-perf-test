import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqg")
export default class BqgController {
  @operation({
    summary: "Get Bqg",
  })
  @get()
  static getBqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqg",
  })
  @post("{id}")
  static createBqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
