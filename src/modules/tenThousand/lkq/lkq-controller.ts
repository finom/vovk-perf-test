import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkq")
export default class LkqController {
  @operation({
    summary: "Get Lkq",
  })
  @get()
  static getLkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkq",
  })
  @post("{id}")
  static createLkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
