import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgc")
export default class BgcController {
  @operation({
    summary: "Get Bgc",
  })
  @get()
  static getBgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgc",
  })
  @post("{id}")
  static createBgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
