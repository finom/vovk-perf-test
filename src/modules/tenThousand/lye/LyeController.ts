import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lye")
export default class LyeController {
  @operation({
    summary: "Get Lye",
  })
  @get()
  static getLye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lye",
  })
  @post("{id}")
  static createLye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
