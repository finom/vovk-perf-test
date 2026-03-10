import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mes")
export default class MesController {
  @operation({
    summary: "Get Mes",
  })
  @get()
  static getMes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mes",
  })
  @post("{id}")
  static createMes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
