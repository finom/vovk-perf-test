import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhw")
export default class LhwController {
  @operation({
    summary: "Get Lhw",
  })
  @get()
  static getLhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhw",
  })
  @post("{id}")
  static createLhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
