import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbc")
export default class LbcController {
  @operation({
    summary: "Get Lbc",
  })
  @get()
  static getLbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbc",
  })
  @post("{id}")
  static createLbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
