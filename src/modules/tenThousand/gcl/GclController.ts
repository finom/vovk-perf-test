import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcl")
export default class GclController {
  @operation({
    summary: "Get Gcl",
  })
  @get()
  static getGcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcl",
  })
  @post("{id}")
  static createGcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
