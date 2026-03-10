import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbe")
export default class MbeController {
  @operation({
    summary: "Get Mbe",
  })
  @get()
  static getMbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbe",
  })
  @post("{id}")
  static createMbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
