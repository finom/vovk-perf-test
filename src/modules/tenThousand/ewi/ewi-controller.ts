import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewi")
export default class EwiController {
  @operation({
    summary: "Get Ewi",
  })
  @get()
  static getEwi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewi",
  })
  @post("{id}")
  static createEwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
