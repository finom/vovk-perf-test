import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsv")
export default class HsvController {
  @operation({
    summary: "Get Hsv",
  })
  @get()
  static getHsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsv",
  })
  @post("{id}")
  static createHsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
