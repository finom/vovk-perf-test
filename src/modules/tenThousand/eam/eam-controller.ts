import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eam")
export default class EamController {
  @operation({
    summary: "Get Eam",
  })
  @get()
  static getEam = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eam",
  })
  @post("{id}")
  static createEam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
