import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ys")
export default class YsController {
  @operation({
    summary: "Get Ys",
  })
  @get()
  static getYs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ys",
  })
  @post("{id}")
  static createYs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
