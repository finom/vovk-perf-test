import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gof")
export default class GofController {
  @operation({
    summary: "Get Gof",
  })
  @get()
  static getGof = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gof",
  })
  @post("{id}")
  static createGof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
