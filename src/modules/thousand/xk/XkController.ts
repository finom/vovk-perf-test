import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xk")
export default class XkController {
  @operation({
    summary: "Get Xk",
  })
  @get()
  static getXk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xk",
  })
  @post("{id}")
  static createXk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
