import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwa")
export default class BwaController {
  @operation({
    summary: "Get Bwa",
  })
  @get()
  static getBwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwa",
  })
  @post("{id}")
  static createBwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
