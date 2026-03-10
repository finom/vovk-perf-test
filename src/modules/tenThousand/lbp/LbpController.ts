import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbp")
export default class LbpController {
  @operation({
    summary: "Get Lbp",
  })
  @get()
  static getLbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbp",
  })
  @post("{id}")
  static createLbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
