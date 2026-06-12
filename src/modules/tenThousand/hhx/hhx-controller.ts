import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhx")
export default class HhxController {
  @operation({
    summary: "Get Hhx",
  })
  @get()
  static getHhx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhx",
  })
  @post("{id}")
  static createHhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
