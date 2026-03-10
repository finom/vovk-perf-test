import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wx")
export default class WxController {
  @operation({
    summary: "Get Wx",
  })
  @get()
  static getWx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wx",
  })
  @post("{id}")
  static createWx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
