import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npa")
export default class NpaController {
  @operation({
    summary: "Get Npa",
  })
  @get()
  static getNpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npa",
  })
  @post("{id}")
  static createNpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
