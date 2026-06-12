import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xv")
export default class XvController {
  @operation({
    summary: "Get Xv",
  })
  @get()
  static getXv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xv",
  })
  @post("{id}")
  static createXv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
