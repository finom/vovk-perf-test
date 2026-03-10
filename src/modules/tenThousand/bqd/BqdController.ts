import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqd")
export default class BqdController {
  @operation({
    summary: "Get Bqd",
  })
  @get()
  static getBqd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqd",
  })
  @post("{id}")
  static createBqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
