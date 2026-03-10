import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxg")
export default class HxgController {
  @operation({
    summary: "Get Hxg",
  })
  @get()
  static getHxg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxg",
  })
  @post("{id}")
  static createHxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
