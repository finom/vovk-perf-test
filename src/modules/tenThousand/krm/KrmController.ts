import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krm")
export default class KrmController {
  @operation({
    summary: "Get Krm",
  })
  @get()
  static getKrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krm",
  })
  @post("{id}")
  static createKrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
