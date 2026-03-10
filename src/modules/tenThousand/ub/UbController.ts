import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ub")
export default class UbController {
  @operation({
    summary: "Get Ub",
  })
  @get()
  static getUb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ub",
  })
  @post("{id}")
  static createUb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
