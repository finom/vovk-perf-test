import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgc")
export default class HgcController {
  @operation({
    summary: "Get Hgc",
  })
  @get()
  static getHgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgc",
  })
  @post("{id}")
  static createHgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
