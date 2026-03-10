import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kew")
export default class KewController {
  @operation({
    summary: "Get Kew",
  })
  @get()
  static getKew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kew",
  })
  @post("{id}")
  static createKew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
