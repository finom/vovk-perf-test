import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jaf")
export default class JafController {
  @operation({
    summary: "Get Jaf",
  })
  @get()
  static getJaf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jaf",
  })
  @post("{id}")
  static createJaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
