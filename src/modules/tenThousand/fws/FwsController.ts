import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fws")
export default class FwsController {
  @operation({
    summary: "Get Fws",
  })
  @get()
  static getFws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fws",
  })
  @post("{id}")
  static createFws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
