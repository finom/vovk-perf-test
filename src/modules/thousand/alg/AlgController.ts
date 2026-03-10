import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alg")
export default class AlgController {
  @operation({
    summary: "Get Alg",
  })
  @get()
  static getAlg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alg",
  })
  @post("{id}")
  static createAlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
