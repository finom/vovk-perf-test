import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkm")
export default class JkmController {
  @operation({
    summary: "Get Jkm",
  })
  @get()
  static getJkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkm",
  })
  @post("{id}")
  static createJkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
