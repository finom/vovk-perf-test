import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmm")
export default class NmmController {
  @operation({
    summary: "Get Nmm",
  })
  @get()
  static getNmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmm",
  })
  @post("{id}")
  static createNmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
