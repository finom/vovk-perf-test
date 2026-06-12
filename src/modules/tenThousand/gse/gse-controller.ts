import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gse")
export default class GseController {
  @operation({
    summary: "Get Gse",
  })
  @get()
  static getGse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gse",
  })
  @post("{id}")
  static createGse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
