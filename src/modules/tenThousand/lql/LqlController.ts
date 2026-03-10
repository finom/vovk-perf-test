import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lql")
export default class LqlController {
  @operation({
    summary: "Get Lql",
  })
  @get()
  static getLql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lql",
  })
  @post("{id}")
  static createLql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
