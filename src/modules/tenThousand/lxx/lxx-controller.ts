import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxx")
export default class LxxController {
  @operation({
    summary: "Get Lxx",
  })
  @get()
  static getLxx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxx",
  })
  @post("{id}")
  static createLxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
