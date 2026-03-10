import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eth")
export default class EthController {
  @operation({
    summary: "Get Eth",
  })
  @get()
  static getEth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eth",
  })
  @post("{id}")
  static createEth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
