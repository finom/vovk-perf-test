import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwa")
export default class GwaController {
  @operation({
    summary: "Get Gwa",
  })
  @get()
  static getGwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwa",
  })
  @post("{id}")
  static createGwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
