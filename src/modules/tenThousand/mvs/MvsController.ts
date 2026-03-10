import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvs")
export default class MvsController {
  @operation({
    summary: "Get Mvs",
  })
  @get()
  static getMvs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvs",
  })
  @post("{id}")
  static createMvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
