import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxv")
export default class HxvController {
  @operation({
    summary: "Get Hxv",
  })
  @get()
  static getHxv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxv",
  })
  @post("{id}")
  static createHxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
