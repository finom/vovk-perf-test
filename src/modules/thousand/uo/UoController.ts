import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uo")
export default class UoController {
  @operation({
    summary: "Get Uo",
  })
  @get()
  static getUo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Uo",
  })
  @post("{id}")
  static createUo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
