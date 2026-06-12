import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anm")
export default class AnmController {
  @operation({
    summary: "Get Anm",
  })
  @get()
  static getAnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anm",
  })
  @post("{id}")
  static createAnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
