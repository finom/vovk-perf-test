import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gss")
export default class GssController {
  @operation({
    summary: "Get Gss",
  })
  @get()
  static getGss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gss",
  })
  @post("{id}")
  static createGss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
