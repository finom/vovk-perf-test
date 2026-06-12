import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwb")
export default class FwbController {
  @operation({
    summary: "Get Fwb",
  })
  @get()
  static getFwb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwb",
  })
  @post("{id}")
  static createFwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
