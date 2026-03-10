import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfd")
export default class HfdController {
  @operation({
    summary: "Get Hfd",
  })
  @get()
  static getHfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfd",
  })
  @post("{id}")
  static createHfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
