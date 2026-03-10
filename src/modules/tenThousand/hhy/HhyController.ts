import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhy")
export default class HhyController {
  @operation({
    summary: "Get Hhy",
  })
  @get()
  static getHhy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhy",
  })
  @post("{id}")
  static createHhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
