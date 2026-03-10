import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxl")
export default class MxlController {
  @operation({
    summary: "Get Mxl",
  })
  @get()
  static getMxl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxl",
  })
  @post("{id}")
  static createMxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
