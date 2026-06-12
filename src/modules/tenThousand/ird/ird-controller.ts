import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ird")
export default class IrdController {
  @operation({
    summary: "Get Ird",
  })
  @get()
  static getIrd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ird",
  })
  @post("{id}")
  static createIrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
