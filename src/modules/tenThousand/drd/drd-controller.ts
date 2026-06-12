import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drd")
export default class DrdController {
  @operation({
    summary: "Get Drd",
  })
  @get()
  static getDrd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drd",
  })
  @post("{id}")
  static createDrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
