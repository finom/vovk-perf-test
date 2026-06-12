import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glj")
export default class GljController {
  @operation({
    summary: "Get Glj",
  })
  @get()
  static getGlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glj",
  })
  @post("{id}")
  static createGlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
