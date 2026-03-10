import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqm")
export default class HqmController {
  @operation({
    summary: "Get Hqm",
  })
  @get()
  static getHqm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqm",
  })
  @post("{id}")
  static createHqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
