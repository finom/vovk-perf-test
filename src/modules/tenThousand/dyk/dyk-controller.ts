import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyk")
export default class DykController {
  @operation({
    summary: "Get Dyk",
  })
  @get()
  static getDyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyk",
  })
  @post("{id}")
  static createDyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
