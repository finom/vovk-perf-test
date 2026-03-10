import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkz")
export default class GkzController {
  @operation({
    summary: "Get Gkz",
  })
  @get()
  static getGkz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkz",
  })
  @post("{id}")
  static createGkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
