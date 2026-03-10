import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vp")
export default class VpController {
  @operation({
    summary: "Get Vp",
  })
  @get()
  static getVp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vp",
  })
  @post("{id}")
  static createVp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
