import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpi")
export default class FpiController {
  @operation({
    summary: "Get Fpi",
  })
  @get()
  static getFpi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpi",
  })
  @post("{id}")
  static createFpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
