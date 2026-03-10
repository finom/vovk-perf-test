import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxw")
export default class HxwController {
  @operation({
    summary: "Get Hxw",
  })
  @get()
  static getHxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxw",
  })
  @post("{id}")
  static createHxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
