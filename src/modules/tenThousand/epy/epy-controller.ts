import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epy")
export default class EpyController {
  @operation({
    summary: "Get Epy",
  })
  @get()
  static getEpy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epy",
  })
  @post("{id}")
  static createEpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
