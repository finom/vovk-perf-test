import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jih")
export default class JihController {
  @operation({
    summary: "Get Jih",
  })
  @get()
  static getJih = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jih",
  })
  @post("{id}")
  static createJih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
