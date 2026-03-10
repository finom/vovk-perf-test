import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("now")
export default class NowController {
  @operation({
    summary: "Get Now",
  })
  @get()
  static getNow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Now",
  })
  @post("{id}")
  static createNow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
