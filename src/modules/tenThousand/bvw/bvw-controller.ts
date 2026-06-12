import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvw")
export default class BvwController {
  @operation({
    summary: "Get Bvw",
  })
  @get()
  static getBvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvw",
  })
  @post("{id}")
  static createBvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
