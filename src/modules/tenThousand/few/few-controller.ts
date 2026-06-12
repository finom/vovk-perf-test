import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("few")
export default class FewController {
  @operation({
    summary: "Get Few",
  })
  @get()
  static getFew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Few",
  })
  @post("{id}")
  static createFew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
