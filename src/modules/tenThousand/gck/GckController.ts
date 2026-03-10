import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gck")
export default class GckController {
  @operation({
    summary: "Get Gck",
  })
  @get()
  static getGck = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gck",
  })
  @post("{id}")
  static createGck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
