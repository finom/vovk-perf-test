import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xb")
export default class XbController {
  @operation({
    summary: "Get Xb",
  })
  @get()
  static getXb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xb",
  })
  @post("{id}")
  static createXb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
