import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibc")
export default class IbcController {
  @operation({
    summary: "Get Ibc",
  })
  @get()
  static getIbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibc",
  })
  @post("{id}")
  static createIbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
