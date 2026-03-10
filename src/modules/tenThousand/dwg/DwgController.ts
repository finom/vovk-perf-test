import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwg")
export default class DwgController {
  @operation({
    summary: "Get Dwg",
  })
  @get()
  static getDwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwg",
  })
  @post("{id}")
  static createDwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
