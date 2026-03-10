import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cn")
export default class CnController {
  @operation({
    summary: "Get Cn",
  })
  @get()
  static getCn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cn",
  })
  @post("{id}")
  static createCn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
