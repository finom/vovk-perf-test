import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgx")
export default class HgxController {
  @operation({
    summary: "Get Hgx",
  })
  @get()
  static getHgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgx",
  })
  @post("{id}")
  static createHgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
