import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fll")
export default class FllController {
  @operation({
    summary: "Get Fll",
  })
  @get()
  static getFll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fll",
  })
  @post("{id}")
  static createFll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
