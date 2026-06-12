import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guw")
export default class GuwController {
  @operation({
    summary: "Get Guw",
  })
  @get()
  static getGuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guw",
  })
  @post("{id}")
  static createGuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
