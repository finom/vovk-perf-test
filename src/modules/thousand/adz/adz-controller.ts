import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adz")
export default class AdzController {
  @operation({
    summary: "Get Adz",
  })
  @get()
  static getAdz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adz",
  })
  @post("{id}")
  static createAdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
