import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emr")
export default class EmrController {
  @operation({
    summary: "Get Emr",
  })
  @get()
  static getEmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emr",
  })
  @post("{id}")
  static createEmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
