import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efe")
export default class EfeController {
  @operation({
    summary: "Get Efe",
  })
  @get()
  static getEfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efe",
  })
  @post("{id}")
  static createEfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
