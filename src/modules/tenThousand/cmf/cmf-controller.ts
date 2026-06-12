import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmf")
export default class CmfController {
  @operation({
    summary: "Get Cmf",
  })
  @get()
  static getCmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmf",
  })
  @post("{id}")
  static createCmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
