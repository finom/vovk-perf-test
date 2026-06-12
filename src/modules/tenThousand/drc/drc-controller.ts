import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drc")
export default class DrcController {
  @operation({
    summary: "Get Drc",
  })
  @get()
  static getDrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drc",
  })
  @post("{id}")
  static createDrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
