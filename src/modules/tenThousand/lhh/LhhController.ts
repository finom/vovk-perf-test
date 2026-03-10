import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhh")
export default class LhhController {
  @operation({
    summary: "Get Lhh",
  })
  @get()
  static getLhh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhh",
  })
  @post("{id}")
  static createLhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
