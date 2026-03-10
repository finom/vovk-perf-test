import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrm")
export default class LrmController {
  @operation({
    summary: "Get Lrm",
  })
  @get()
  static getLrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrm",
  })
  @post("{id}")
  static createLrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
