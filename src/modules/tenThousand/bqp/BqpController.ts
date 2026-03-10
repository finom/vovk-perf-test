import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqp")
export default class BqpController {
  @operation({
    summary: "Get Bqp",
  })
  @get()
  static getBqp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqp",
  })
  @post("{id}")
  static createBqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
