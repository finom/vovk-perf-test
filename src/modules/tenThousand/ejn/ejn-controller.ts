import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejn")
export default class EjnController {
  @operation({
    summary: "Get Ejn",
  })
  @get()
  static getEjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejn",
  })
  @post("{id}")
  static createEjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
