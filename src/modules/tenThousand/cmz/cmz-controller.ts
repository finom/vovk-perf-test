import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmz")
export default class CmzController {
  @operation({
    summary: "Get Cmz",
  })
  @get()
  static getCmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmz",
  })
  @post("{id}")
  static createCmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
