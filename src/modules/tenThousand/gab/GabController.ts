import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gab")
export default class GabController {
  @operation({
    summary: "Get Gab",
  })
  @get()
  static getGab = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gab",
  })
  @post("{id}")
  static createGab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
