import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cid")
export default class CidController {
  @operation({
    summary: "Get Cid",
  })
  @get()
  static getCid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cid",
  })
  @post("{id}")
  static createCid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
