import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyw")
export default class FywController {
  @operation({
    summary: "Get Fyw",
  })
  @get()
  static getFyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyw",
  })
  @post("{id}")
  static createFyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
