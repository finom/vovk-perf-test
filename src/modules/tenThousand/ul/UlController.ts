import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ul")
export default class UlController {
  @operation({
    summary: "Get Ul",
  })
  @get()
  static getUl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ul",
  })
  @post("{id}")
  static createUl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
