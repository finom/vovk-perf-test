import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anl")
export default class AnlController {
  @operation({
    summary: "Get Anl",
  })
  @get()
  static getAnl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anl",
  })
  @post("{id}")
  static createAnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
