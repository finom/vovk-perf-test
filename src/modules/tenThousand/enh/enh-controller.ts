import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enh")
export default class EnhController {
  @operation({
    summary: "Get Enh",
  })
  @get()
  static getEnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enh",
  })
  @post("{id}")
  static createEnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
