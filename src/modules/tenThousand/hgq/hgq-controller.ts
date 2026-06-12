import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgq")
export default class HgqController {
  @operation({
    summary: "Get Hgq",
  })
  @get()
  static getHgq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgq",
  })
  @post("{id}")
  static createHgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
