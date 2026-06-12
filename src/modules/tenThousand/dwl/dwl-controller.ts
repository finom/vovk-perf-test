import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwl")
export default class DwlController {
  @operation({
    summary: "Get Dwl",
  })
  @get()
  static getDwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwl",
  })
  @post("{id}")
  static createDwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
