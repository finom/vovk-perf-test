import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvl")
export default class GvlController {
  @operation({
    summary: "Get Gvl",
  })
  @get()
  static getGvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvl",
  })
  @post("{id}")
  static createGvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
