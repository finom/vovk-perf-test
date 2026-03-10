import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihp")
export default class IhpController {
  @operation({
    summary: "Get Ihp",
  })
  @get()
  static getIhp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihp",
  })
  @post("{id}")
  static createIhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
