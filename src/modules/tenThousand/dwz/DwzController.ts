import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwz")
export default class DwzController {
  @operation({
    summary: "Get Dwz",
  })
  @get()
  static getDwz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwz",
  })
  @post("{id}")
  static createDwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
