import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nds")
export default class NdsController {
  @operation({
    summary: "Get Nds",
  })
  @get()
  static getNds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nds",
  })
  @post("{id}")
  static createNds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
