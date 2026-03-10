import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkp")
export default class LkpController {
  @operation({
    summary: "Get Lkp",
  })
  @get()
  static getLkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkp",
  })
  @post("{id}")
  static createLkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
