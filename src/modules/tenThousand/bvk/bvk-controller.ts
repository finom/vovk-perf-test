import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvk")
export default class BvkController {
  @operation({
    summary: "Get Bvk",
  })
  @get()
  static getBvk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvk",
  })
  @post("{id}")
  static createBvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
