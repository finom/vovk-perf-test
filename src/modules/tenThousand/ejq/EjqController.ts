import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejq")
export default class EjqController {
  @operation({
    summary: "Get Ejq",
  })
  @get()
  static getEjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejq",
  })
  @post("{id}")
  static createEjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
