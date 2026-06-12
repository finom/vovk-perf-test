import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irl")
export default class IrlController {
  @operation({
    summary: "Get Irl",
  })
  @get()
  static getIrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irl",
  })
  @post("{id}")
  static createIrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
