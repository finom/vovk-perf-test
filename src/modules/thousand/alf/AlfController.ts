import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alf")
export default class AlfController {
  @operation({
    summary: "Get Alf",
  })
  @get()
  static getAlf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alf",
  })
  @post("{id}")
  static createAlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
