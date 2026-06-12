import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwg")
export default class CwgController {
  @operation({
    summary: "Get Cwg",
  })
  @get()
  static getCwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwg",
  })
  @post("{id}")
  static createCwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
