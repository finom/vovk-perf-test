import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkz")
export default class LkzController {
  @operation({
    summary: "Get Lkz",
  })
  @get()
  static getLkz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkz",
  })
  @post("{id}")
  static createLkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
