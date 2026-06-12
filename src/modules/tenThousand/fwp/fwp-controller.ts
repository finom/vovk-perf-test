import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwp")
export default class FwpController {
  @operation({
    summary: "Get Fwp",
  })
  @get()
  static getFwp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwp",
  })
  @post("{id}")
  static createFwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
