import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cb")
export default class CbController {
  @operation({
    summary: "Get Cb",
  })
  @get()
  static getCb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cb",
  })
  @post("{id}")
  static createCb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
