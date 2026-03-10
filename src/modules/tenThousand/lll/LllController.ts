import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lll")
export default class LllController {
  @operation({
    summary: "Get Lll",
  })
  @get()
  static getLll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lll",
  })
  @post("{id}")
  static createLll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
