import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbp")
export default class BbpController {
  @operation({
    summary: "Get Bbp",
  })
  @get()
  static getBbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbp",
  })
  @post("{id}")
  static createBbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
