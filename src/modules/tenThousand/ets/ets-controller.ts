import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ets")
export default class EtsController {
  @operation({
    summary: "Get Ets",
  })
  @get()
  static getEts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ets",
  })
  @post("{id}")
  static createEts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
