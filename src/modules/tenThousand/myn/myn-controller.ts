import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myn")
export default class MynController {
  @operation({
    summary: "Get Myn",
  })
  @get()
  static getMyn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myn",
  })
  @post("{id}")
  static createMyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
