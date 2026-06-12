import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gws")
export default class GwsController {
  @operation({
    summary: "Get Gws",
  })
  @get()
  static getGws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gws",
  })
  @post("{id}")
  static createGws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
