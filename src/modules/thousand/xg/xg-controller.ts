import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xg")
export default class XgController {
  @operation({
    summary: "Get Xg",
  })
  @get()
  static getXg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xg",
  })
  @post("{id}")
  static createXg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
