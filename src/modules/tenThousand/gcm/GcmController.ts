import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcm")
export default class GcmController {
  @operation({
    summary: "Get Gcm",
  })
  @get()
  static getGcm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcm",
  })
  @post("{id}")
  static createGcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
