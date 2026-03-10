import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inf")
export default class InfController {
  @operation({
    summary: "Get Inf",
  })
  @get()
  static getInf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inf",
  })
  @post("{id}")
  static createInf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
