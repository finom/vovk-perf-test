import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhy")
export default class MhyController {
  @operation({
    summary: "Get Mhy",
  })
  @get()
  static getMhy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhy",
  })
  @post("{id}")
  static createMhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
