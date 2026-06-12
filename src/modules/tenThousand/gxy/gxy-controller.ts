import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxy")
export default class GxyController {
  @operation({
    summary: "Get Gxy",
  })
  @get()
  static getGxy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxy",
  })
  @post("{id}")
  static createGxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
