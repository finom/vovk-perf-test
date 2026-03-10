import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgp")
export default class HgpController {
  @operation({
    summary: "Get Hgp",
  })
  @get()
  static getHgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgp",
  })
  @post("{id}")
  static createHgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
