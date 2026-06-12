import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eax")
export default class EaxController {
  @operation({
    summary: "Get Eax",
  })
  @get()
  static getEax = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eax",
  })
  @post("{id}")
  static createEax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
