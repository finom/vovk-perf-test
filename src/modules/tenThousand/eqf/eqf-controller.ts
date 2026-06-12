import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqf")
export default class EqfController {
  @operation({
    summary: "Get Eqf",
  })
  @get()
  static getEqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqf",
  })
  @post("{id}")
  static createEqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
