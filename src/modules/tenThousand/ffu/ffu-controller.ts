import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffu")
export default class FfuController {
  @operation({
    summary: "Get Ffu",
  })
  @get()
  static getFfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffu",
  })
  @post("{id}")
  static createFfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
