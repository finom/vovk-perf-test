import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqq")
export default class BqqController {
  @operation({
    summary: "Get Bqq",
  })
  @get()
  static getBqq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqq",
  })
  @post("{id}")
  static createBqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
