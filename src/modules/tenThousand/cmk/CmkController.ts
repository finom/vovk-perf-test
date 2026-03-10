import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmk")
export default class CmkController {
  @operation({
    summary: "Get Cmk",
  })
  @get()
  static getCmk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmk",
  })
  @post("{id}")
  static createCmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
