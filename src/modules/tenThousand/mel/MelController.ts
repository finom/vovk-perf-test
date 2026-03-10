import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mel")
export default class MelController {
  @operation({
    summary: "Get Mel",
  })
  @get()
  static getMel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mel",
  })
  @post("{id}")
  static createMel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
