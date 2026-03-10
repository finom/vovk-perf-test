import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehc")
export default class EhcController {
  @operation({
    summary: "Get Ehc",
  })
  @get()
  static getEhc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehc",
  })
  @post("{id}")
  static createEhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
