import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfu")
export default class GfuController {
  @operation({
    summary: "Get Gfu",
  })
  @get()
  static getGfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfu",
  })
  @post("{id}")
  static createGfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
