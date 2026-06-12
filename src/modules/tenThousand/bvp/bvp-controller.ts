import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvp")
export default class BvpController {
  @operation({
    summary: "Get Bvp",
  })
  @get()
  static getBvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvp",
  })
  @post("{id}")
  static createBvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
