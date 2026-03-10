import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bg")
export default class BgController {
  @operation({
    summary: "Get Bg",
  })
  @get()
  static getBg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bg",
  })
  @post("{id}")
  static createBg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
