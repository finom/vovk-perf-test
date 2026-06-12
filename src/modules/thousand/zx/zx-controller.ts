import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zx")
export default class ZxController {
  @operation({
    summary: "Get Zx",
  })
  @get()
  static getZx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zx",
  })
  @post("{id}")
  static createZx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
