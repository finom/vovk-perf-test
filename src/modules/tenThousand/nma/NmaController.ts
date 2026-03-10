import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nma")
export default class NmaController {
  @operation({
    summary: "Get Nma",
  })
  @get()
  static getNma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nma",
  })
  @post("{id}")
  static createNma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
