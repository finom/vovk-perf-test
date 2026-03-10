import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsz")
export default class BszController {
  @operation({
    summary: "Get Bsz",
  })
  @get()
  static getBsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsz",
  })
  @post("{id}")
  static createBsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
