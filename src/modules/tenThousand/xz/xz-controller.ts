import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xz")
export default class XzController {
  @operation({
    summary: "Get Xz",
  })
  @get()
  static getXz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xz",
  })
  @post("{id}")
  static createXz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
