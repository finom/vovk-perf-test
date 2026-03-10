import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eew")
export default class EewController {
  @operation({
    summary: "Get Eew",
  })
  @get()
  static getEew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eew",
  })
  @post("{id}")
  static createEew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
