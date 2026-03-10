import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrl")
export default class NrlController {
  @operation({
    summary: "Get Nrl",
  })
  @get()
  static getNrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrl",
  })
  @post("{id}")
  static createNrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
