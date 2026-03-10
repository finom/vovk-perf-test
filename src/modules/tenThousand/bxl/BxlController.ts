import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxl")
export default class BxlController {
  @operation({
    summary: "Get Bxl",
  })
  @get()
  static getBxl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxl",
  })
  @post("{id}")
  static createBxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
