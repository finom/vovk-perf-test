import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hco")
export default class HcoController {
  @operation({
    summary: "Get Hco",
  })
  @get()
  static getHco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hco",
  })
  @post("{id}")
  static createHco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
