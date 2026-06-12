import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsg")
export default class NsgController {
  @operation({
    summary: "Get Nsg",
  })
  @get()
  static getNsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsg",
  })
  @post("{id}")
  static createNsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
