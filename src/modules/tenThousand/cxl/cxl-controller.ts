import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxl")
export default class CxlController {
  @operation({
    summary: "Get Cxl",
  })
  @get()
  static getCxl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxl",
  })
  @post("{id}")
  static createCxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
