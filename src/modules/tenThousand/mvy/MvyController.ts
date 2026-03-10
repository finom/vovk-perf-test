import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvy")
export default class MvyController {
  @operation({
    summary: "Get Mvy",
  })
  @get()
  static getMvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvy",
  })
  @post("{id}")
  static createMvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
