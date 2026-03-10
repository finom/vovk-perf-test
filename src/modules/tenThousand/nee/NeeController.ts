import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nee")
export default class NeeController {
  @operation({
    summary: "Get Nee",
  })
  @get()
  static getNee = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nee",
  })
  @post("{id}")
  static createNee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
