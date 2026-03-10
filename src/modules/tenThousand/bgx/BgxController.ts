import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgx")
export default class BgxController {
  @operation({
    summary: "Get Bgx",
  })
  @get()
  static getBgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgx",
  })
  @post("{id}")
  static createBgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
