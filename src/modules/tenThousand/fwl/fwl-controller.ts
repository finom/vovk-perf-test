import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwl")
export default class FwlController {
  @operation({
    summary: "Get Fwl",
  })
  @get()
  static getFwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwl",
  })
  @post("{id}")
  static createFwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
