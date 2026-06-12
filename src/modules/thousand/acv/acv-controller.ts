import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acv")
export default class AcvController {
  @operation({
    summary: "Get Acv",
  })
  @get()
  static getAcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acv",
  })
  @post("{id}")
  static createAcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
