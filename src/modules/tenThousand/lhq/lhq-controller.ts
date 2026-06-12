import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhq")
export default class LhqController {
  @operation({
    summary: "Get Lhq",
  })
  @get()
  static getLhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhq",
  })
  @post("{id}")
  static createLhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
