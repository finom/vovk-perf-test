import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwl")
export default class CwlController {
  @operation({
    summary: "Get Cwl",
  })
  @get()
  static getCwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwl",
  })
  @post("{id}")
  static createCwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
