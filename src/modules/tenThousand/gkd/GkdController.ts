import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkd")
export default class GkdController {
  @operation({
    summary: "Get Gkd",
  })
  @get()
  static getGkd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkd",
  })
  @post("{id}")
  static createGkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
