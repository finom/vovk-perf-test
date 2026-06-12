import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhk")
export default class HhkController {
  @operation({
    summary: "Get Hhk",
  })
  @get()
  static getHhk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhk",
  })
  @post("{id}")
  static createHhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
