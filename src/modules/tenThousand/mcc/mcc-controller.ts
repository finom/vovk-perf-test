import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcc")
export default class MccController {
  @operation({
    summary: "Get Mcc",
  })
  @get()
  static getMcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcc",
  })
  @post("{id}")
  static createMcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
