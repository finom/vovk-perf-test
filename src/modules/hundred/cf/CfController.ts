import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cf")
export default class CfController {
  @operation({
    summary: "Get Cf",
  })
  @get()
  static getCf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cf",
  })
  @post("{id}")
  static createCf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
