import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ens")
export default class EnsController {
  @operation({
    summary: "Get Ens",
  })
  @get()
  static getEns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ens",
  })
  @post("{id}")
  static createEns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
