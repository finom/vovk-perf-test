import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfb")
export default class KfbController {
  @operation({
    summary: "Get Kfb",
  })
  @get()
  static getKfb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfb",
  })
  @post("{id}")
  static createKfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
