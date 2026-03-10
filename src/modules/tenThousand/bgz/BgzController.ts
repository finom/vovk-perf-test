import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgz")
export default class BgzController {
  @operation({
    summary: "Get Bgz",
  })
  @get()
  static getBgz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgz",
  })
  @post("{id}")
  static createBgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
