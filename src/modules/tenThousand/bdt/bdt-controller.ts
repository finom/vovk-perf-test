import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdt")
export default class BdtController {
  @operation({
    summary: "Get Bdt",
  })
  @get()
  static getBdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdt",
  })
  @post("{id}")
  static createBdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
