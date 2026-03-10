import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("va")
export default class VaController {
  @operation({
    summary: "Get Va",
  })
  @get()
  static getVa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Va",
  })
  @post("{id}")
  static createVa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
