import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gad")
export default class GadController {
  @operation({
    summary: "Get Gad",
  })
  @get()
  static getGad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gad",
  })
  @post("{id}")
  static createGad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
