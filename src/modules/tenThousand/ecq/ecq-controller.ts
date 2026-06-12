import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecq")
export default class EcqController {
  @operation({
    summary: "Get Ecq",
  })
  @get()
  static getEcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecq",
  })
  @post("{id}")
  static createEcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
