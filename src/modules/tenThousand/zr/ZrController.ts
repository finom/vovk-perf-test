import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zr")
export default class ZrController {
  @operation({
    summary: "Get Zr",
  })
  @get()
  static getZr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zr",
  })
  @post("{id}")
  static createZr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
