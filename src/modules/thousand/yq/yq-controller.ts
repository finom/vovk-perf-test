import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yq")
export default class YqController {
  @operation({
    summary: "Get Yq",
  })
  @get()
  static getYq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yq",
  })
  @post("{id}")
  static createYq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
