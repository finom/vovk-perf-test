import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqk")
export default class BqkController {
  @operation({
    summary: "Get Bqk",
  })
  @get()
  static getBqk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqk",
  })
  @post("{id}")
  static createBqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
