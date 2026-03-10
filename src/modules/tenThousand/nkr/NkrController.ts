import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkr")
export default class NkrController {
  @operation({
    summary: "Get Nkr",
  })
  @get()
  static getNkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkr",
  })
  @post("{id}")
  static createNkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
