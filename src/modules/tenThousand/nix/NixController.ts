import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nix")
export default class NixController {
  @operation({
    summary: "Get Nix",
  })
  @get()
  static getNix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nix",
  })
  @post("{id}")
  static createNix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
