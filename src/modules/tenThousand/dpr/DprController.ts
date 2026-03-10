import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpr")
export default class DprController {
  @operation({
    summary: "Get Dpr",
  })
  @get()
  static getDpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpr",
  })
  @post("{id}")
  static createDpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
