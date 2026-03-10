import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sz")
export default class SzController {
  @operation({
    summary: "Get Sz",
  })
  @get()
  static getSz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sz",
  })
  @post("{id}")
  static createSz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
