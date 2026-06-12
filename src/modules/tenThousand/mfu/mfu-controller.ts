import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfu")
export default class MfuController {
  @operation({
    summary: "Get Mfu",
  })
  @get()
  static getMfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfu",
  })
  @post("{id}")
  static createMfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
