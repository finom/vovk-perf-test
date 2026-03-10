import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgf")
export default class HgfController {
  @operation({
    summary: "Get Hgf",
  })
  @get()
  static getHgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgf",
  })
  @post("{id}")
  static createHgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
