import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcd")
export default class GcdController {
  @operation({
    summary: "Get Gcd",
  })
  @get()
  static getGcd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcd",
  })
  @post("{id}")
  static createGcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
