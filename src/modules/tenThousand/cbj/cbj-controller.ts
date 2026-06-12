import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbj")
export default class CbjController {
  @operation({
    summary: "Get Cbj",
  })
  @get()
  static getCbj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbj",
  })
  @post("{id}")
  static createCbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
