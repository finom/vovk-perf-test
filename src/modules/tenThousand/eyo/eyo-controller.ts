import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyo")
export default class EyoController {
  @operation({
    summary: "Get Eyo",
  })
  @get()
  static getEyo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyo",
  })
  @post("{id}")
  static createEyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
