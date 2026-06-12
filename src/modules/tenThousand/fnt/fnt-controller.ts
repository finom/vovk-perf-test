import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnt")
export default class FntController {
  @operation({
    summary: "Get Fnt",
  })
  @get()
  static getFnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fnt",
  })
  @post("{id}")
  static createFnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
