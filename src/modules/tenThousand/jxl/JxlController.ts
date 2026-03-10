import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxl")
export default class JxlController {
  @operation({
    summary: "Get Jxl",
  })
  @get()
  static getJxl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxl",
  })
  @post("{id}")
  static createJxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
