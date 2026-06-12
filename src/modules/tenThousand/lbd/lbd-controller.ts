import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbd")
export default class LbdController {
  @operation({
    summary: "Get Lbd",
  })
  @get()
  static getLbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbd",
  })
  @post("{id}")
  static createLbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
