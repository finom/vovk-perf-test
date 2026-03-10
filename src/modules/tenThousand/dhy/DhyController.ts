import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhy")
export default class DhyController {
  @operation({
    summary: "Get Dhy",
  })
  @get()
  static getDhy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhy",
  })
  @post("{id}")
  static createDhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
