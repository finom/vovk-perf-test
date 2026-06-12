import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drl")
export default class DrlController {
  @operation({
    summary: "Get Drl",
  })
  @get()
  static getDrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drl",
  })
  @post("{id}")
  static createDrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
