import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlz")
export default class HlzController {
  @operation({
    summary: "Get Hlz",
  })
  @get()
  static getHlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlz",
  })
  @post("{id}")
  static createHlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
