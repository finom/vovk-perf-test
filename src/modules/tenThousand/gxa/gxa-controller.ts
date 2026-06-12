import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxa")
export default class GxaController {
  @operation({
    summary: "Get Gxa",
  })
  @get()
  static getGxa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxa",
  })
  @post("{id}")
  static createGxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
