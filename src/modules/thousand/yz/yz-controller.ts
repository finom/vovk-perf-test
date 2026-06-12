import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yz")
export default class YzController {
  @operation({
    summary: "Get Yz",
  })
  @get()
  static getYz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yz",
  })
  @post("{id}")
  static createYz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
