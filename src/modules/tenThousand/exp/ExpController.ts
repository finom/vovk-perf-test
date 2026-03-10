import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exp")
export default class ExpController {
  @operation({
    summary: "Get Exp",
  })
  @get()
  static getExp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exp",
  })
  @post("{id}")
  static createExp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
