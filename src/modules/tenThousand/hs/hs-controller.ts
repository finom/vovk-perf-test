import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hs")
export default class HsController {
  @operation({
    summary: "Get Hs",
  })
  @get()
  static getHs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hs",
  })
  @post("{id}")
  static createHs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
