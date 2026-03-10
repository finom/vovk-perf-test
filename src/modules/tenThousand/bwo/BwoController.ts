import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwo")
export default class BwoController {
  @operation({
    summary: "Get Bwo",
  })
  @get()
  static getBwo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwo",
  })
  @post("{id}")
  static createBwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
