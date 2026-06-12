import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blm")
export default class BlmController {
  @operation({
    summary: "Get Blm",
  })
  @get()
  static getBlm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blm",
  })
  @post("{id}")
  static createBlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
