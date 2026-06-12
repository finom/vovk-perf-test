import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrq")
export default class LrqController {
  @operation({
    summary: "Get Lrq",
  })
  @get()
  static getLrq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrq",
  })
  @post("{id}")
  static createLrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
