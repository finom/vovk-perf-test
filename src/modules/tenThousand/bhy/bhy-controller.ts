import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhy")
export default class BhyController {
  @operation({
    summary: "Get Bhy",
  })
  @get()
  static getBhy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhy",
  })
  @post("{id}")
  static createBhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
