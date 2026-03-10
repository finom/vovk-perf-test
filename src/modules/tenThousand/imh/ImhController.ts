import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imh")
export default class ImhController {
  @operation({
    summary: "Get Imh",
  })
  @get()
  static getImh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imh",
  })
  @post("{id}")
  static createImh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
