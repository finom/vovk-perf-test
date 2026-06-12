import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ids")
export default class IdsController {
  @operation({
    summary: "Get Ids",
  })
  @get()
  static getIds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ids",
  })
  @post("{id}")
  static createIds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
