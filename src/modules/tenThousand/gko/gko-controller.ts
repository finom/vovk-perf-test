import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gko")
export default class GkoController {
  @operation({
    summary: "Get Gko",
  })
  @get()
  static getGko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gko",
  })
  @post("{id}")
  static createGko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
