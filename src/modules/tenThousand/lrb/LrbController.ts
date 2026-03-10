import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrb")
export default class LrbController {
  @operation({
    summary: "Get Lrb",
  })
  @get()
  static getLrb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrb",
  })
  @post("{id}")
  static createLrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
