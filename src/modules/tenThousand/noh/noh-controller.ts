import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noh")
export default class NohController {
  @operation({
    summary: "Get Noh",
  })
  @get()
  static getNoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Noh",
  })
  @post("{id}")
  static createNoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
