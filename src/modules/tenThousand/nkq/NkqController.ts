import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkq")
export default class NkqController {
  @operation({
    summary: "Get Nkq",
  })
  @get()
  static getNkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkq",
  })
  @post("{id}")
  static createNkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
