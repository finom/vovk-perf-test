import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eee")
export default class EeeController {
  @operation({
    summary: "Get Eee",
  })
  @get()
  static getEee = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eee",
  })
  @post("{id}")
  static createEee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
