import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhq")
export default class HhqController {
  @operation({
    summary: "Get Hhq",
  })
  @get()
  static getHhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhq",
  })
  @post("{id}")
  static createHhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
