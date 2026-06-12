import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ani")
export default class AniController {
  @operation({
    summary: "Get Ani",
  })
  @get()
  static getAni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ani",
  })
  @post("{id}")
  static createAni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
