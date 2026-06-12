import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apy")
export default class ApyController {
  @operation({
    summary: "Get Apy",
  })
  @get()
  static getApy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apy",
  })
  @post("{id}")
  static createApy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
