import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gev")
export default class GevController {
  @operation({
    summary: "Get Gev",
  })
  @get()
  static getGev = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gev",
  })
  @post("{id}")
  static createGev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
