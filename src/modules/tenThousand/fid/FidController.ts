import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fid")
export default class FidController {
  @operation({
    summary: "Get Fid",
  })
  @get()
  static getFid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fid",
  })
  @post("{id}")
  static createFid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
