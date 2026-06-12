import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffm")
export default class FfmController {
  @operation({
    summary: "Get Ffm",
  })
  @get()
  static getFfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffm",
  })
  @post("{id}")
  static createFfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
