import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gf")
export default class GfController {
  @operation({
    summary: "Get Gf",
  })
  @get()
  static getGf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gf",
  })
  @post("{id}")
  static createGf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
