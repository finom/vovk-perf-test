import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftu")
export default class FtuController {
  @operation({
    summary: "Get Ftu",
  })
  @get()
  static getFtu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftu",
  })
  @post("{id}")
  static createFtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
