import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nig")
export default class NigController {
  @operation({
    summary: "Get Nig",
  })
  @get()
  static getNig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nig",
  })
  @post("{id}")
  static createNig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
