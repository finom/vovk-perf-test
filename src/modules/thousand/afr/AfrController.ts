import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afr")
export default class AfrController {
  @operation({
    summary: "Get Afr",
  })
  @get()
  static getAfr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afr",
  })
  @post("{id}")
  static createAfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
