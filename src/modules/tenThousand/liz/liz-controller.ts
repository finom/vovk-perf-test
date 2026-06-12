import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("liz")
export default class LizController {
  @operation({
    summary: "Get Liz",
  })
  @get()
  static getLiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Liz",
  })
  @post("{id}")
  static createLiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
