import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcz")
export default class LczController {
  @operation({
    summary: "Get Lcz",
  })
  @get()
  static getLcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcz",
  })
  @post("{id}")
  static createLcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
