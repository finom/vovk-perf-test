import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fls")
export default class FlsController {
  @operation({
    summary: "Get Fls",
  })
  @get()
  static getFls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fls",
  })
  @post("{id}")
  static createFls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
