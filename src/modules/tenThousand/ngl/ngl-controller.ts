import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngl")
export default class NglController {
  @operation({
    summary: "Get Ngl",
  })
  @get()
  static getNgl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngl",
  })
  @post("{id}")
  static createNgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
