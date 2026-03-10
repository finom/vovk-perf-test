import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdd")
export default class MddController {
  @operation({
    summary: "Get Mdd",
  })
  @get()
  static getMdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdd",
  })
  @post("{id}")
  static createMdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
