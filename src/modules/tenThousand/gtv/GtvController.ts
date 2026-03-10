import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtv")
export default class GtvController {
  @operation({
    summary: "Get Gtv",
  })
  @get()
  static getGtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtv",
  })
  @post("{id}")
  static createGtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
