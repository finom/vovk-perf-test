import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyk")
export default class EykController {
  @operation({
    summary: "Get Eyk",
  })
  @get()
  static getEyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyk",
  })
  @post("{id}")
  static createEyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
