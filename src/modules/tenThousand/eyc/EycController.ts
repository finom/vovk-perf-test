import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyc")
export default class EycController {
  @operation({
    summary: "Get Eyc",
  })
  @get()
  static getEyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyc",
  })
  @post("{id}")
  static createEyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
