import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gd")
export default class GdController {
  @operation({
    summary: "Get Gd",
  })
  @get()
  static getGd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gd",
  })
  @post("{id}")
  static createGd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
