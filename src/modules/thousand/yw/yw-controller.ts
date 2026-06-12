import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yw")
export default class YwController {
  @operation({
    summary: "Get Yw",
  })
  @get()
  static getYw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yw",
  })
  @post("{id}")
  static createYw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
