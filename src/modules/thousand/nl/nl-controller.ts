import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nl")
export default class NlController {
  @operation({
    summary: "Get Nl",
  })
  @get()
  static getNl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nl",
  })
  @post("{id}")
  static createNl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
