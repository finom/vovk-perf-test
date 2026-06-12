import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njb")
export default class NjbController {
  @operation({
    summary: "Get Njb",
  })
  @get()
  static getNjb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njb",
  })
  @post("{id}")
  static createNjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
