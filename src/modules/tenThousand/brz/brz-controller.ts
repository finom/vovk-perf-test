import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brz")
export default class BrzController {
  @operation({
    summary: "Get Brz",
  })
  @get()
  static getBrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brz",
  })
  @post("{id}")
  static createBrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
