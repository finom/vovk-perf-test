import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqr")
export default class BqrController {
  @operation({
    summary: "Get Bqr",
  })
  @get()
  static getBqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqr",
  })
  @post("{id}")
  static createBqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
