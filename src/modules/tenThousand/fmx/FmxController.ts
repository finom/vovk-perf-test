import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmx")
export default class FmxController {
  @operation({
    summary: "Get Fmx",
  })
  @get()
  static getFmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmx",
  })
  @post("{id}")
  static createFmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
