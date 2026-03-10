import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsw")
export default class HswController {
  @operation({
    summary: "Get Hsw",
  })
  @get()
  static getHsw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsw",
  })
  @post("{id}")
  static createHsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
