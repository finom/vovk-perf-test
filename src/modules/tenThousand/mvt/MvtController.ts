import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvt")
export default class MvtController {
  @operation({
    summary: "Get Mvt",
  })
  @get()
  static getMvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvt",
  })
  @post("{id}")
  static createMvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
