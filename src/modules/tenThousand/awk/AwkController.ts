import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awk")
export default class AwkController {
  @operation({
    summary: "Get Awk",
  })
  @get()
  static getAwk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awk",
  })
  @post("{id}")
  static createAwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
