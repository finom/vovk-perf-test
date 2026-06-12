import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxw")
export default class GxwController {
  @operation({
    summary: "Get Gxw",
  })
  @get()
  static getGxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxw",
  })
  @post("{id}")
  static createGxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
