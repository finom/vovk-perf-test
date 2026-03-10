import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckp")
export default class CkpController {
  @operation({
    summary: "Get Ckp",
  })
  @get()
  static getCkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckp",
  })
  @post("{id}")
  static createCkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
