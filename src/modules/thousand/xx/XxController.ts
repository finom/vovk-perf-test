import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xx")
export default class XxController {
  @operation({
    summary: "Get Xx",
  })
  @get()
  static getXx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xx",
  })
  @post("{id}")
  static createXx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
