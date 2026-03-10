import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dia")
export default class DiaController {
  @operation({
    summary: "Get Dia",
  })
  @get()
  static getDia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dia",
  })
  @post("{id}")
  static createDia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
