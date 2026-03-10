import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrn")
export default class LrnController {
  @operation({
    summary: "Get Lrn",
  })
  @get()
  static getLrn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrn",
  })
  @post("{id}")
  static createLrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
