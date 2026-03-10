import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqy")
export default class EqyController {
  @operation({
    summary: "Get Eqy",
  })
  @get()
  static getEqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqy",
  })
  @post("{id}")
  static createEqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
