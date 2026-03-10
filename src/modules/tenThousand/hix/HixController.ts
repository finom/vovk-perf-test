import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hix")
export default class HixController {
  @operation({
    summary: "Get Hix",
  })
  @get()
  static getHix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hix",
  })
  @post("{id}")
  static createHix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
