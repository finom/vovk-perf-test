import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbb")
export default class GbbController {
  @operation({
    summary: "Get Gbb",
  })
  @get()
  static getGbb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbb",
  })
  @post("{id}")
  static createGbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
