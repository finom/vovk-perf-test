import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erc")
export default class ErcController {
  @operation({
    summary: "Get Erc",
  })
  @get()
  static getErc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erc",
  })
  @post("{id}")
  static createErc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
