import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgt")
export default class LgtController {
  @operation({
    summary: "Get Lgt",
  })
  @get()
  static getLgt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgt",
  })
  @post("{id}")
  static createLgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
