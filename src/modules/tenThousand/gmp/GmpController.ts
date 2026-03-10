import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmp")
export default class GmpController {
  @operation({
    summary: "Get Gmp",
  })
  @get()
  static getGmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmp",
  })
  @post("{id}")
  static createGmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
