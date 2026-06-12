import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mi")
export default class MiController {
  @operation({
    summary: "Get Mi",
  })
  @get()
  static getMi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mi",
  })
  @post("{id}")
  static createMi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
