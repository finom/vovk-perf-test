import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grl")
export default class GrlController {
  @operation({
    summary: "Get Grl",
  })
  @get()
  static getGrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grl",
  })
  @post("{id}")
  static createGrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
