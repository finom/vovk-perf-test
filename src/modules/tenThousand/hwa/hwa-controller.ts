import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwa")
export default class HwaController {
  @operation({
    summary: "Get Hwa",
  })
  @get()
  static getHwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwa",
  })
  @post("{id}")
  static createHwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
