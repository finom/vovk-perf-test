import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnu")
export default class DnuController {
  @operation({
    summary: "Get Dnu",
  })
  @get()
  static getDnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnu",
  })
  @post("{id}")
  static createDnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
