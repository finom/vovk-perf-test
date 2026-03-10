import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noa")
export default class NoaController {
  @operation({
    summary: "Get Noa",
  })
  @get()
  static getNoa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Noa",
  })
  @post("{id}")
  static createNoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
