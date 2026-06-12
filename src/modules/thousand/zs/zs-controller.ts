import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zs")
export default class ZsController {
  @operation({
    summary: "Get Zs",
  })
  @get()
  static getZs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zs",
  })
  @post("{id}")
  static createZs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
