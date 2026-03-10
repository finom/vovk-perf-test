import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxx")
export default class JxxController {
  @operation({
    summary: "Get Jxx",
  })
  @get()
  static getJxx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxx",
  })
  @post("{id}")
  static createJxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
