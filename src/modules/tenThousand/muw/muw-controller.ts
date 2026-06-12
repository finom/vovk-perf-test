import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muw")
export default class MuwController {
  @operation({
    summary: "Get Muw",
  })
  @get()
  static getMuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muw",
  })
  @post("{id}")
  static createMuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
