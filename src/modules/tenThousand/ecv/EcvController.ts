import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecv")
export default class EcvController {
  @operation({
    summary: "Get Ecv",
  })
  @get()
  static getEcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecv",
  })
  @post("{id}")
  static createEcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
