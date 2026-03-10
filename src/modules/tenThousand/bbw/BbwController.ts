import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbw")
export default class BbwController {
  @operation({
    summary: "Get Bbw",
  })
  @get()
  static getBbw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbw",
  })
  @post("{id}")
  static createBbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
