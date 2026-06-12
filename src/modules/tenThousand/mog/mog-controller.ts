import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mog")
export default class MogController {
  @operation({
    summary: "Get Mog",
  })
  @get()
  static getMog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mog",
  })
  @post("{id}")
  static createMog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
