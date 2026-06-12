import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvm")
export default class GvmController {
  @operation({
    summary: "Get Gvm",
  })
  @get()
  static getGvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvm",
  })
  @post("{id}")
  static createGvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
