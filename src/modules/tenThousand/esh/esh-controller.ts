import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esh")
export default class EshController {
  @operation({
    summary: "Get Esh",
  })
  @get()
  static getEsh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esh",
  })
  @post("{id}")
  static createEsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
