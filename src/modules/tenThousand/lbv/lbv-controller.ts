import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbv")
export default class LbvController {
  @operation({
    summary: "Get Lbv",
  })
  @get()
  static getLbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbv",
  })
  @post("{id}")
  static createLbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
