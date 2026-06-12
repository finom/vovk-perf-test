import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkx")
export default class LkxController {
  @operation({
    summary: "Get Lkx",
  })
  @get()
  static getLkx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkx",
  })
  @post("{id}")
  static createLkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
