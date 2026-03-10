import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvc")
export default class MvcController {
  @operation({
    summary: "Get Mvc",
  })
  @get()
  static getMvc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvc",
  })
  @post("{id}")
  static createMvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
