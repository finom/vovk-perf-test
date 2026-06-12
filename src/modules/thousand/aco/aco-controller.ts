import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aco")
export default class AcoController {
  @operation({
    summary: "Get Aco",
  })
  @get()
  static getAco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aco",
  })
  @post("{id}")
  static createAco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
