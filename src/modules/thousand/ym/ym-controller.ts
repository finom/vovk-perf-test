import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ym")
export default class YmController {
  @operation({
    summary: "Get Ym",
  })
  @get()
  static getYm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ym",
  })
  @post("{id}")
  static createYm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
