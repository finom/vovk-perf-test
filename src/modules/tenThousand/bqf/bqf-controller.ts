import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqf")
export default class BqfController {
  @operation({
    summary: "Get Bqf",
  })
  @get()
  static getBqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqf",
  })
  @post("{id}")
  static createBqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
