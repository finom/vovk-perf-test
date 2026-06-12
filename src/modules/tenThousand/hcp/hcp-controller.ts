import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcp")
export default class HcpController {
  @operation({
    summary: "Get Hcp",
  })
  @get()
  static getHcp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hcp",
  })
  @post("{id}")
  static createHcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
