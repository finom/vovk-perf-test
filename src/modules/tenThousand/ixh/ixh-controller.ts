import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixh")
export default class IxhController {
  @operation({
    summary: "Get Ixh",
  })
  @get()
  static getIxh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixh",
  })
  @post("{id}")
  static createIxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
