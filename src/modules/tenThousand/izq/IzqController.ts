import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izq")
export default class IzqController {
  @operation({
    summary: "Get Izq",
  })
  @get()
  static getIzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izq",
  })
  @post("{id}")
  static createIzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
