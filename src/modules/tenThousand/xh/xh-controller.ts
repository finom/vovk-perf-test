import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xh")
export default class XhController {
  @operation({
    summary: "Get Xh",
  })
  @get()
  static getXh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xh",
  })
  @post("{id}")
  static createXh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
