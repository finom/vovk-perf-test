import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxs")
export default class JxsController {
  @operation({
    summary: "Get Jxs",
  })
  @get()
  static getJxs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxs",
  })
  @post("{id}")
  static createJxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
