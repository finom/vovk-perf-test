import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpr")
export default class FprController {
  @operation({
    summary: "Get Fpr",
  })
  @get()
  static getFpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpr",
  })
  @post("{id}")
  static createFpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
