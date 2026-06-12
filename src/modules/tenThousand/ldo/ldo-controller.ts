import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldo")
export default class LdoController {
  @operation({
    summary: "Get Ldo",
  })
  @get()
  static getLdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldo",
  })
  @post("{id}")
  static createLdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
