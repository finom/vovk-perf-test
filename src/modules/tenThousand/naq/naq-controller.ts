import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("naq")
export default class NaqController {
  @operation({
    summary: "Get Naq",
  })
  @get()
  static getNaq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Naq",
  })
  @post("{id}")
  static createNaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
