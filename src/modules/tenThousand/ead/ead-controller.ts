import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ead")
export default class EadController {
  @operation({
    summary: "Get Ead",
  })
  @get()
  static getEad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ead",
  })
  @post("{id}")
  static createEad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
