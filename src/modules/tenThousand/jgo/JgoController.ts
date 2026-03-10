import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgo")
export default class JgoController {
  @operation({
    summary: "Get Jgo",
  })
  @get()
  static getJgo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgo",
  })
  @post("{id}")
  static createJgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
