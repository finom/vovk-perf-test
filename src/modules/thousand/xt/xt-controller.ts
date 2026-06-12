import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xt")
export default class XtController {
  @operation({
    summary: "Get Xt",
  })
  @get()
  static getXt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xt",
  })
  @post("{id}")
  static createXt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
