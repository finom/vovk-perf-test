import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eby")
export default class EbyController {
  @operation({
    summary: "Get Eby",
  })
  @get()
  static getEby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eby",
  })
  @post("{id}")
  static createEby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
