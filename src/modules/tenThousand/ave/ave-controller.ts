import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ave")
export default class AveController {
  @operation({
    summary: "Get Ave",
  })
  @get()
  static getAve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ave",
  })
  @post("{id}")
  static createAve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
