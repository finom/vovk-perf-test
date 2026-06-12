import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("f")
export default class FController {
  @operation({
    summary: "Get F",
  })
  @get()
  static getF = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create F",
  })
  @post("{id}")
  static createF = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
