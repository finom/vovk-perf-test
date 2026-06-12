import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nps")
export default class NpsController {
  @operation({
    summary: "Get Nps",
  })
  @get()
  static getNps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nps",
  })
  @post("{id}")
  static createNps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
