import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgo")
export default class LgoController {
  @operation({
    summary: "Get Lgo",
  })
  @get()
  static getLgo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgo",
  })
  @post("{id}")
  static createLgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
