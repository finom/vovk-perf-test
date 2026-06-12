import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ca")
export default class CaController {
  @operation({
    summary: "Get Ca",
  })
  @get()
  static getCa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ca",
  })
  @post("{id}")
  static createCa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
