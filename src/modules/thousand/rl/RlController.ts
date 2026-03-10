import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rl")
export default class RlController {
  @operation({
    summary: "Get Rl",
  })
  @get()
  static getRl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rl",
  })
  @post("{id}")
  static createRl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
