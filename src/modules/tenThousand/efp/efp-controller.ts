import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efp")
export default class EfpController {
  @operation({
    summary: "Get Efp",
  })
  @get()
  static getEfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efp",
  })
  @post("{id}")
  static createEfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
