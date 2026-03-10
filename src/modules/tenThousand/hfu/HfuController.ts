import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfu")
export default class HfuController {
  @operation({
    summary: "Get Hfu",
  })
  @get()
  static getHfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfu",
  })
  @post("{id}")
  static createHfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
