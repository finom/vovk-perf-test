import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zc")
export default class ZcController {
  @operation({
    summary: "Get Zc",
  })
  @get()
  static getZc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zc",
  })
  @post("{id}")
  static createZc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
