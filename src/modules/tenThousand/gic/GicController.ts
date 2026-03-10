import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gic")
export default class GicController {
  @operation({
    summary: "Get Gic",
  })
  @get()
  static getGic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gic",
  })
  @post("{id}")
  static createGic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
