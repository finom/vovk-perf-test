import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmt")
export default class CmtController {
  @operation({
    summary: "Get Cmt",
  })
  @get()
  static getCmt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmt",
  })
  @post("{id}")
  static createCmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
