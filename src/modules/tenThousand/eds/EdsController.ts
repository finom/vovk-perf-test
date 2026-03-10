import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eds")
export default class EdsController {
  @operation({
    summary: "Get Eds",
  })
  @get()
  static getEds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eds",
  })
  @post("{id}")
  static createEds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
