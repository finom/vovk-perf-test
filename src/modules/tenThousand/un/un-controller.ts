import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("un")
export default class UnController {
  @operation({
    summary: "Get Un",
  })
  @get()
  static getUn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Un",
  })
  @post("{id}")
  static createUn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
