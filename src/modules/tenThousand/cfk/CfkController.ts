import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfk")
export default class CfkController {
  @operation({
    summary: "Get Cfk",
  })
  @get()
  static getCfk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfk",
  })
  @post("{id}")
  static createCfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
