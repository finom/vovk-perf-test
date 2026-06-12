import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgm")
export default class HgmController {
  @operation({
    summary: "Get Hgm",
  })
  @get()
  static getHgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgm",
  })
  @post("{id}")
  static createHgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
