import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eii")
export default class EiiController {
  @operation({
    summary: "Get Eii",
  })
  @get()
  static getEii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eii",
  })
  @post("{id}")
  static createEii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
