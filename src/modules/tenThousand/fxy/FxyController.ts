import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxy")
export default class FxyController {
  @operation({
    summary: "Get Fxy",
  })
  @get()
  static getFxy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxy",
  })
  @post("{id}")
  static createFxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
