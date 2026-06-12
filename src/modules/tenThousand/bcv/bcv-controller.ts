import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcv")
export default class BcvController {
  @operation({
    summary: "Get Bcv",
  })
  @get()
  static getBcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcv",
  })
  @post("{id}")
  static createBcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
