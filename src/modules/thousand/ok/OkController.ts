import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ok")
export default class OkController {
  @operation({
    summary: "Get Ok",
  })
  @get()
  static getOk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ok",
  })
  @post("{id}")
  static createOk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
