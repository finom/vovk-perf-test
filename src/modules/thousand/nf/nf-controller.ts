import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nf")
export default class NfController {
  @operation({
    summary: "Get Nf",
  })
  @get()
  static getNf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nf",
  })
  @post("{id}")
  static createNf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
