import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cps")
export default class CpsController {
  @operation({
    summary: "Get Cps",
  })
  @get()
  static getCps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cps",
  })
  @post("{id}")
  static createCps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
