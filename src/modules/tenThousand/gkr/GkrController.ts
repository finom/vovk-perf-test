import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkr")
export default class GkrController {
  @operation({
    summary: "Get Gkr",
  })
  @get()
  static getGkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkr",
  })
  @post("{id}")
  static createGkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
