import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brr")
export default class BrrController {
  @operation({
    summary: "Get Brr",
  })
  @get()
  static getBrr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brr",
  })
  @post("{id}")
  static createBrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
