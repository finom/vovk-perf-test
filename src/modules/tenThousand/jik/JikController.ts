import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jik")
export default class JikController {
  @operation({
    summary: "Get Jik",
  })
  @get()
  static getJik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jik",
  })
  @post("{id}")
  static createJik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
