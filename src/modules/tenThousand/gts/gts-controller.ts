import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gts")
export default class GtsController {
  @operation({
    summary: "Get Gts",
  })
  @get()
  static getGts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gts",
  })
  @post("{id}")
  static createGts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
