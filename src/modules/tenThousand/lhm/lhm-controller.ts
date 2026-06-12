import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhm")
export default class LhmController {
  @operation({
    summary: "Get Lhm",
  })
  @get()
  static getLhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhm",
  })
  @post("{id}")
  static createLhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
