import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("naj")
export default class NajController {
  @operation({
    summary: "Get Naj",
  })
  @get()
  static getNaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Naj",
  })
  @post("{id}")
  static createNaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
