import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvx")
export default class BvxController {
  @operation({
    summary: "Get Bvx",
  })
  @get()
  static getBvx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvx",
  })
  @post("{id}")
  static createBvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
