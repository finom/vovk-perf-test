import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecp")
export default class EcpController {
  @operation({
    summary: "Get Ecp",
  })
  @get()
  static getEcp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecp",
  })
  @post("{id}")
  static createEcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
