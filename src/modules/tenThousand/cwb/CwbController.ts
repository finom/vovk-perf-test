import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwb")
export default class CwbController {
  @operation({
    summary: "Get Cwb",
  })
  @get()
  static getCwb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwb",
  })
  @post("{id}")
  static createCwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
