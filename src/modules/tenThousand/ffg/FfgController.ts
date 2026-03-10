import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffg")
export default class FfgController {
  @operation({
    summary: "Get Ffg",
  })
  @get()
  static getFfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffg",
  })
  @post("{id}")
  static createFfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
