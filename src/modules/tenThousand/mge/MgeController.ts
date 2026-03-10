import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mge")
export default class MgeController {
  @operation({
    summary: "Get Mge",
  })
  @get()
  static getMge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mge",
  })
  @post("{id}")
  static createMge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
