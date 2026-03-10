import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnu")
export default class MnuController {
  @operation({
    summary: "Get Mnu",
  })
  @get()
  static getMnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnu",
  })
  @post("{id}")
  static createMnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
