import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxh")
export default class HxhController {
  @operation({
    summary: "Get Hxh",
  })
  @get()
  static getHxh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxh",
  })
  @post("{id}")
  static createHxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
