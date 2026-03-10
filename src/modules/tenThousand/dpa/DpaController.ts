import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpa")
export default class DpaController {
  @operation({
    summary: "Get Dpa",
  })
  @get()
  static getDpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpa",
  })
  @post("{id}")
  static createDpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
