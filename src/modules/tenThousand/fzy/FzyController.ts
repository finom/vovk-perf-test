import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzy")
export default class FzyController {
  @operation({
    summary: "Get Fzy",
  })
  @get()
  static getFzy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzy",
  })
  @post("{id}")
  static createFzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
