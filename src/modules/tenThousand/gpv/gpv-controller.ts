import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpv")
export default class GpvController {
  @operation({
    summary: "Get Gpv",
  })
  @get()
  static getGpv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpv",
  })
  @post("{id}")
  static createGpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
