import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nem")
export default class NemController {
  @operation({
    summary: "Get Nem",
  })
  @get()
  static getNem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nem",
  })
  @post("{id}")
  static createNem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
