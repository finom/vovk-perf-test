import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejl")
export default class EjlController {
  @operation({
    summary: "Get Ejl",
  })
  @get()
  static getEjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejl",
  })
  @post("{id}")
  static createEjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
