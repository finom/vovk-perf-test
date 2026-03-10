import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqc")
export default class BqcController {
  @operation({
    summary: "Get Bqc",
  })
  @get()
  static getBqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqc",
  })
  @post("{id}")
  static createBqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
