import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhy")
export default class LhyController {
  @operation({
    summary: "Get Lhy",
  })
  @get()
  static getLhy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhy",
  })
  @post("{id}")
  static createLhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
