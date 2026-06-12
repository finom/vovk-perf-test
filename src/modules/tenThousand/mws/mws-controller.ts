import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mws")
export default class MwsController {
  @operation({
    summary: "Get Mws",
  })
  @get()
  static getMws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mws",
  })
  @post("{id}")
  static createMws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
