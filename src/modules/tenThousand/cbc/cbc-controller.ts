import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbc")
export default class CbcController {
  @operation({
    summary: "Get Cbc",
  })
  @get()
  static getCbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbc",
  })
  @post("{id}")
  static createCbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
