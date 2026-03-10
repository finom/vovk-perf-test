import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hei")
export default class HeiController {
  @operation({
    summary: "Get Hei",
  })
  @get()
  static getHei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hei",
  })
  @post("{id}")
  static createHei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
