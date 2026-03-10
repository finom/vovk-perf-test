import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgn")
export default class HgnController {
  @operation({
    summary: "Get Hgn",
  })
  @get()
  static getHgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgn",
  })
  @post("{id}")
  static createHgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
