import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpl")
export default class FplController {
  @operation({
    summary: "Get Fpl",
  })
  @get()
  static getFpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpl",
  })
  @post("{id}")
  static createFpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
