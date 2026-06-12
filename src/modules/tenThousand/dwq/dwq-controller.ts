import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwq")
export default class DwqController {
  @operation({
    summary: "Get Dwq",
  })
  @get()
  static getDwq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwq",
  })
  @post("{id}")
  static createDwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
