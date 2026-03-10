import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldy")
export default class LdyController {
  @operation({
    summary: "Get Ldy",
  })
  @get()
  static getLdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldy",
  })
  @post("{id}")
  static createLdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
