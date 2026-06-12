import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cni")
export default class CniController {
  @operation({
    summary: "Get Cni",
  })
  @get()
  static getCni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cni",
  })
  @post("{id}")
  static createCni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
