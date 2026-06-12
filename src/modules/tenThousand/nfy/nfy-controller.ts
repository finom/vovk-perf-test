import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfy")
export default class NfyController {
  @operation({
    summary: "Get Nfy",
  })
  @get()
  static getNfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfy",
  })
  @post("{id}")
  static createNfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
