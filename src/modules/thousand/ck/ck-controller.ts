import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ck")
export default class CkController {
  @operation({
    summary: "Get Ck",
  })
  @get()
  static getCk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ck",
  })
  @post("{id}")
  static createCk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
