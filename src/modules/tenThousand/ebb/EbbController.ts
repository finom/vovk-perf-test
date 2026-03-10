import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebb")
export default class EbbController {
  @operation({
    summary: "Get Ebb",
  })
  @get()
  static getEbb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebb",
  })
  @post("{id}")
  static createEbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
