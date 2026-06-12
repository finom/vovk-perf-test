import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gur")
export default class GurController {
  @operation({
    summary: "Get Gur",
  })
  @get()
  static getGur = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gur",
  })
  @post("{id}")
  static createGur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
