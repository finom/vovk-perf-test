import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bow")
export default class BowController {
  @operation({
    summary: "Get Bow",
  })
  @get()
  static getBow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bow",
  })
  @post("{id}")
  static createBow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
