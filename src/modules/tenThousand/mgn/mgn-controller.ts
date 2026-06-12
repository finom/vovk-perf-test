import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgn")
export default class MgnController {
  @operation({
    summary: "Get Mgn",
  })
  @get()
  static getMgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgn",
  })
  @post("{id}")
  static createMgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
