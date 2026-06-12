import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmv")
export default class CmvController {
  @operation({
    summary: "Get Cmv",
  })
  @get()
  static getCmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmv",
  })
  @post("{id}")
  static createCmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
