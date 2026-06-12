import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gaq")
export default class GaqController {
  @operation({
    summary: "Get Gaq",
  })
  @get()
  static getGaq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gaq",
  })
  @post("{id}")
  static createGaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
