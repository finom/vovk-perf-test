import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlb")
export default class HlbController {
  @operation({
    summary: "Get Hlb",
  })
  @get()
  static getHlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlb",
  })
  @post("{id}")
  static createHlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
