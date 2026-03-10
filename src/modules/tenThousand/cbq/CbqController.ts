import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbq")
export default class CbqController {
  @operation({
    summary: "Get Cbq",
  })
  @get()
  static getCbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbq",
  })
  @post("{id}")
  static createCbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
