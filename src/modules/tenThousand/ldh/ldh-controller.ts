import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldh")
export default class LdhController {
  @operation({
    summary: "Get Ldh",
  })
  @get()
  static getLdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldh",
  })
  @post("{id}")
  static createLdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
