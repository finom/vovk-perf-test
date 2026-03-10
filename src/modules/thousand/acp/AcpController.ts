import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acp")
export default class AcpController {
  @operation({
    summary: "Get Acp",
  })
  @get()
  static getAcp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acp",
  })
  @post("{id}")
  static createAcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
