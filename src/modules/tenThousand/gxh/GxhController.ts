import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxh")
export default class GxhController {
  @operation({
    summary: "Get Gxh",
  })
  @get()
  static getGxh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxh",
  })
  @post("{id}")
  static createGxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
