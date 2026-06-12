import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nni")
export default class NniController {
  @operation({
    summary: "Get Nni",
  })
  @get()
  static getNni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nni",
  })
  @post("{id}")
  static createNni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
