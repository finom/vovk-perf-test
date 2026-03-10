import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhb")
export default class HhbController {
  @operation({
    summary: "Get Hhb",
  })
  @get()
  static getHhb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhb",
  })
  @post("{id}")
  static createHhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
