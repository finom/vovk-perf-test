import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewr")
export default class EwrController {
  @operation({
    summary: "Get Ewr",
  })
  @get()
  static getEwr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewr",
  })
  @post("{id}")
  static createEwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
