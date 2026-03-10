import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cco")
export default class CcoController {
  @operation({
    summary: "Get Cco",
  })
  @get()
  static getCco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cco",
  })
  @post("{id}")
  static createCco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
