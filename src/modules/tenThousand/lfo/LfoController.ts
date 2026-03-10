import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfo")
export default class LfoController {
  @operation({
    summary: "Get Lfo",
  })
  @get()
  static getLfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfo",
  })
  @post("{id}")
  static createLfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
