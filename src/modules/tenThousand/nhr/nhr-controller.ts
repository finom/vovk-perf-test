import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhr")
export default class NhrController {
  @operation({
    summary: "Get Nhr",
  })
  @get()
  static getNhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhr",
  })
  @post("{id}")
  static createNhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
