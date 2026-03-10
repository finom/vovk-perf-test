import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncs")
export default class NcsController {
  @operation({
    summary: "Get Ncs",
  })
  @get()
  static getNcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncs",
  })
  @post("{id}")
  static createNcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
