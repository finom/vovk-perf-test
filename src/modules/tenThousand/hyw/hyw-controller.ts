import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyw")
export default class HywController {
  @operation({
    summary: "Get Hyw",
  })
  @get()
  static getHyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyw",
  })
  @post("{id}")
  static createHyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
