import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpc")
export default class LpcController {
  @operation({
    summary: "Get Lpc",
  })
  @get()
  static getLpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpc",
  })
  @post("{id}")
  static createLpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
