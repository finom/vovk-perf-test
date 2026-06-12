import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbp")
export default class MbpController {
  @operation({
    summary: "Get Mbp",
  })
  @get()
  static getMbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbp",
  })
  @post("{id}")
  static createMbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
