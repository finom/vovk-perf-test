import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eln")
export default class ElnController {
  @operation({
    summary: "Get Eln",
  })
  @get()
  static getEln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eln",
  })
  @post("{id}")
  static createEln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
