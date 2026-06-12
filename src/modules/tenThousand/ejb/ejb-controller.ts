import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejb")
export default class EjbController {
  @operation({
    summary: "Get Ejb",
  })
  @get()
  static getEjb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejb",
  })
  @post("{id}")
  static createEjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
