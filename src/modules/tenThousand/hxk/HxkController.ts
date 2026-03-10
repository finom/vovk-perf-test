import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxk")
export default class HxkController {
  @operation({
    summary: "Get Hxk",
  })
  @get()
  static getHxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxk",
  })
  @post("{id}")
  static createHxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
