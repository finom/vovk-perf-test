import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbk")
export default class CbkController {
  @operation({
    summary: "Get Cbk",
  })
  @get()
  static getCbk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbk",
  })
  @post("{id}")
  static createCbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
