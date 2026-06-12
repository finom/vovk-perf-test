import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvg")
export default class KvgController {
  @operation({
    summary: "Get Kvg",
  })
  @get()
  static getKvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvg",
  })
  @post("{id}")
  static createKvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
