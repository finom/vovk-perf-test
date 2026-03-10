import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nag")
export default class NagController {
  @operation({
    summary: "Get Nag",
  })
  @get()
  static getNag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nag",
  })
  @post("{id}")
  static createNag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
