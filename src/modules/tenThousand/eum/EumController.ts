import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eum")
export default class EumController {
  @operation({
    summary: "Get Eum",
  })
  @get()
  static getEum = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eum",
  })
  @post("{id}")
  static createEum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
