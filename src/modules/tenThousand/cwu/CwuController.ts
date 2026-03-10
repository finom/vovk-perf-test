import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwu")
export default class CwuController {
  @operation({
    summary: "Get Cwu",
  })
  @get()
  static getCwu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwu",
  })
  @post("{id}")
  static createCwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
