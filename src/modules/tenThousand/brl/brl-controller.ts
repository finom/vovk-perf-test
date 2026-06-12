import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brl")
export default class BrlController {
  @operation({
    summary: "Get Brl",
  })
  @get()
  static getBrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brl",
  })
  @post("{id}")
  static createBrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
