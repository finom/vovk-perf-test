import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxr")
export default class GxrController {
  @operation({
    summary: "Get Gxr",
  })
  @get()
  static getGxr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxr",
  })
  @post("{id}")
  static createGxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
