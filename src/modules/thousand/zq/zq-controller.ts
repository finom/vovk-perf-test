import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zq")
export default class ZqController {
  @operation({
    summary: "Get Zq",
  })
  @get()
  static getZq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zq",
  })
  @post("{id}")
  static createZq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
