import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgd")
export default class HgdController {
  @operation({
    summary: "Get Hgd",
  })
  @get()
  static getHgd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgd",
  })
  @post("{id}")
  static createHgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
