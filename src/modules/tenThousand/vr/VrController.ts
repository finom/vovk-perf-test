import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vr")
export default class VrController {
  @operation({
    summary: "Get Vr",
  })
  @get()
  static getVr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vr",
  })
  @post("{id}")
  static createVr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
