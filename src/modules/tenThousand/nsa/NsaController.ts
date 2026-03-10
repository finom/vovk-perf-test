import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsa")
export default class NsaController {
  @operation({
    summary: "Get Nsa",
  })
  @get()
  static getNsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsa",
  })
  @post("{id}")
  static createNsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
